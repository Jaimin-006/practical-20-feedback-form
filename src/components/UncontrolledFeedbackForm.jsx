import React, { useRef } from 'react';

function UncontrolledFeedbackForm() {
  // Creating references to DOM elements directly
  const nameRef = useRef(null);
  const commentsRef = useRef(null);

  function handleFormSubmit(e) {
    e.preventDefault();

    // Fetching values directly from DOM references
    const enteredName = nameRef.current.value;
    const enteredComments = commentsRef.current.value;

    alert('Feedback Submitted!\nUser: ' + enteredName + '\nComments: ' + enteredComments);

    // Clear inputs manually
    nameRef.current.value = '';
    commentsRef.current.value = '';
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow border border-gray-200">
      <h2 className="text-2xl font-bold text-orange-600 mb-2">Customer Feedback</h2>
      <p className="text-xs text-gray-500 mb-4">Uncontrolled component using React useRef hook.</p>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Your Name:</label>
          <input
            type="text"
            ref={nameRef}
            className="w-full p-2 border border-gray-300 rounded text-sm"
            placeholder="e.g. Jaiminpuri Bava"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">Comments:</label>
          <textarea
            ref={commentsRef}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded text-sm"
            placeholder="Write your feedback..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded font-bold hover:bg-orange-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default UncontrolledFeedbackForm;
