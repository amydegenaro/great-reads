export default (voteHistory) => {
  const tally = {
    // bookName: votes
  }

  // count top choice votes - obj structure
  // voteHistory.forEach(vote => {
  //   Object.keys(vote).forEach(book => {
  //     const rank = vote[book];
  //     if (!rank) return;
  //     if (rank === 1) {
  //       if (tally[book]) {
  //         tally[book] += 1
  //       } else {
  //         tally[book] = 1
  //       }
  //     }
  //   })
  // })

  // voteHistory is an array of arrays
  // first item in second array is top choice
  // count top choice votes - arr structure
  voteHistory.forEach(voteArr => {
    const book = voteArr[0];
    if (tally[book]) {
      tally[book] += 1
    } else {
      tally[book] = 1
    }
  })

  // sort by most to least votes
  const sortedBooks = Object.keys(tally).sort((a, b) => tally[b] - tally[a]);
  const winner = sortedBooks[0];
  // return first item in sorted array
  // NOTE: this doesn't handle ties
  return {
    book: winner,
    votes: tally[winner],
    sortedBooks,
  };
}
