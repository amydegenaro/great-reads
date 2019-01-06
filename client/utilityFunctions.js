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

// export function generateAuthorList(arr) {
//   const authors = []
//   arr.forEach(item => {
//     if (!authors.includes(item)) {
//       authors.push(item)
//     }
//   })
//   return authors
// }

// export function generateYearList(arr) {
//   return arr.map(item => item.year)
// }

export function filterResults(arr, state) {
  return arr
    .filter(item => state.author ? item.author.includes(state.author) : true)
    .filter(item => state.tags ? item.tags.includes(state.tags) : true)
    .filter(item => state.year ? item.year === Number(state.year) : true)
}

// ------COMBINED------

export function filterAndSort(arr, state) {
  const temp = filterResults(arr, state)
  return sortResults(temp, state.sort)
}
