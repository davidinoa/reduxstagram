// increment
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	};
}

// add comment
export function addComment(postId, author, comment) {
	console.log('Dispatching ADD_COMMENT');
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	};
}

// remove comment
export function removeComment(postId, i) {
	type: 'REMOVE_COMMENT', postId, i;
}
