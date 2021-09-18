const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
    query PostPages {
        allMarkdownRemark {
          nodes {
            id
            frontmatter {
              title
            }
          }
        }
      }
    `)

    const tags = await graphql(`
      query TagAggregationQuery {
        allMarkdownRemark {
          nodes {
            frontmatter {
              tags,
              title,
              date
            }
          }
        }
      }
  `)

    const resultantTags = [...new Set(tags.data.allMarkdownRemark.nodes
      .flatMap(node => node.frontmatter.tags))]
      .map(item => ({ original: item }))
      .map(item => ({...item, modified: item.original.toLowerCase()}))
      .map(item => ({...item, modified: item.modified.replaceAll(" ", "-")}))

    const searchTemplate = path.resolve('./src/templates/search.js')

    resultantTags.forEach((tag) => {
      actions.createPage({
        path: `/search/tag/${tag['modified']}`,
        component: searchTemplate,
        context: {
          tags: tags.data,
          tag: tag['original']
        }
      })
    })

    const postTemplate = path.resolve('./src/templates/post.js')
    data.allMarkdownRemark.nodes.forEach((post) => {
      const titleSlug = post.frontmatter.title.replaceAll(" ", "-").toLowerCase()
        actions.createPage({
            path: `/blog/${titleSlug}`,
            component: postTemplate,
            context: {
                title: post.frontmatter.title,
                id: post.id
            }
        })
    })
}