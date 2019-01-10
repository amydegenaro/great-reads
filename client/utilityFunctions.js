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

export function filterResults(arr, state) {
  return arr
    .filter(item => state.author ? item.author.includes(state.author) : true)
    .filter(item => state.tags ? item.tags.includes(state.tags) : true)
    .filter(item => state.year ? item.year === Number(state.year) : true)
}

// Get all tags/subjects found in search results for filter dropdown
export function generateTagList(arr) {
  const tagList = {}
  arr.forEach(item => {
    if (item.tags) {
      item.tags.forEach(tag => {
        if (tagList[tag]) tagList[tag]++ // keep a record of tag count in case we want it later
        else tagList[tag] = 1
      })
    }
  })
  return Object.keys(tagList).sort((a, b) => { // sort tag list alphabetically
    a = a.toLowerCase()
    b = b.toLowerCase()
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else if (a === b) {
      return 0;
    }
  })
}

// Get all authors found in search results for filter dropdown
export function generateAuthorList(arr) {
  const authors = {}
  arr.forEach(item => {
    if (Array.isArray(item.author)) { // if there is more than one author, loop through them
      item.author.forEach(author => {
        if (!authors[author]) authors[author] = true // and add any new ones to the list
      })
    } else if (!authors[item.author]) authors[item.author] = true
      // if there's only one author, add it to the list if it's new
  })
  return Object.keys(authors).sort()
}

// Get all publication years found in search results for filter dropdown
export function generateYearList(arr) {
  // return arr.map(item => item.year)

  const yearList = {}
  arr.forEach(item => {
    if (item.year) {
      if (yearList[item.year]) yearList[item.year]++ // keep a record of year count in case we want it later
      else yearList[item.year] = 1
    }
  })
  return Object.keys(yearList)

}

// ------COMBINED------

export function filterAndSort(arr, state) {
  return sortResults(
    filterResults(arr, state),
    state.sort
  )
}
