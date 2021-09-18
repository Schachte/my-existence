---
title: Deeply Understanding Recursion
description: This is a description here
date: February 20th, 2021
tags:
    - algorithms
    - reading
    - rants
---

# This is some data

### Analyzing This Javascript Sample

```javascript
const data = 'this is some code';

const mapData = ["test", "data", "here"];
const result = mapData.map(data => data.toUpperCase()).filter(item => item.includes("here"));

// result should be ["TEST", "DATA]
```