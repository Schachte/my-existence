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

    const result = await graphql(`
      query TagBasedAggregation($tags: StringQueryOperatorInput = {}) {
        allMarkdownRemark(filter: {frontmatter: {tags: $tags}}) {
          nodes {
            frontmatter {
              title
              date
            }
            id
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

    resultantTags.forEach((tag) => {
      actions.createPage({
        path: `/search/tag/${tag['modified']}`,
        component: path.resolve('./src/templates/search.js'),
        context: {
          tags: tags.data,
          tag: tag['original']
        }
      })
    })

    data.allMarkdownRemark.nodes.forEach((post) => {
        actions.createPage({
            path: '/blog/' + post.frontmatter.title.replaceAll(" ", "-").toLowerCase(),
            component: path.resolve('./src/templates/post.js'),
            context: {
                title: post.frontmatter.title,
                id: post.id
            }
        })
    })

}