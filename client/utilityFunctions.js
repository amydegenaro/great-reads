export function sortAscending(arr, sortValue) {
  return arr.slice().sort((a,b) => (a[sortValue] === null) - (b[sortValue] === null) || a[sortValue] - b[sortValue])
}

export function sortDescending(arr, sortValue) {
  return arr.slice().sort((a,b) => (a[sortValue] === null) - (b[sortValue] === null) || b[sortValue] - a[sortValue])
}
