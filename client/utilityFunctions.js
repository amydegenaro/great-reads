// ------SORT FUNCTIONS------
export function sortAscending(arr, sortValue) {
  return arr.slice().sort((a,b) => (a[sortValue] === null) - (b[sortValue] === null) || a[sortValue] - b[sortValue])
}

export function sortDescending(arr, sortValue) {
  return arr.slice().sort((a,b) => (a[sortValue] === null) - (b[sortValue] === null) || b[sortValue] - a[sortValue])
}

export function sortResults(arr, sortValue) {
  switch (sortValue) {
    case 'year':
      return sortAscending(arr, sortValue)
    case 'editions':
      return sortDescending(arr, sortValue)
    default:
      return arr
  }
}

// ------FILTER FUNCTIONS------

// create a list & count of all tags from an array of search results, to use in filter dropdown
export function generateTagList(arr) {
  const tagList = {}
  arr.forEach(item => {
    if (item.tags) {
      item.tags.forEach(tag => {
        if (tagList[tag]) tagList[tag]++
        else tagList[tag] = 1
      })
    }
  })
  return tagList
}

export function filterResults(arr, category, value) {
  switch (category) {
    case 'author':
      return arr.filter(item => item.author.includes(value))
    case 'tags':
      return arr.filter(item => item.tags.includes(value))
    case 'year':
      return arr.filter(item => item.year === value)
    default:
      return arr
  }
}
