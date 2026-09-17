import React, { useRef } from 'react';

function UncontrolledFeedbackForm() {
  const nameRef = useRef(null);
  const commentsRef = useRef(null);

  function handleFormSubmit(e) {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredComments = commentsRef.current.value;

    alert('Feedback Submitted!\nUser: ' + enteredName + '\nComments: ' + enteredComments);

    nameRef.current.value = '';
    commentsRef.current.value = '';
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-sm border border-amber-200">
      <h2 className="text-2xl font-bold text-amber-900 mb-1">Customer Feedback</h2>
      <p className="text-xs text-amber-700 mb-4">Uncontrolled component using React useRef hook.</p>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-amber-950 mb-1">Your Name:</label>
          <input
            type="text"
            ref={nameRef}
            className="w-full p-2.5 border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="e.g. Jaiminpuri Bava"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-amber-950 mb-1">Comments:</label>
          <textarea
            ref={commentsRef}
            rows="3"
            className="w-full p-2.5 border border-slate-300 rounded-md text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Write your feedback..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2.5 rounded-md font-semibold text-sm transition"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default UncontrolledFeedbackForm;
