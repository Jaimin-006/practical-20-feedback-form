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
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md border border-amber-200/80">
      <div className="border-b border-amber-100 pb-3 mb-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
          Customer Feedback
        </h2>
        <p className="text-xs text-amber-700 mt-1 font-medium">Uncontrolled component using React useRef hook.</p>
      </div>

      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-amber-950 uppercase tracking-wider mb-1">Your Name:</label>
          <input
            type="text"
            ref={nameRef}
            className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="e.g. Jaiminpuri Bava"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-amber-950 uppercase tracking-wider mb-1">Comments:</label>
          <textarea
            ref={commentsRef}
            rows="3"
            className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Write your feedback..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2.5 rounded-lg font-semibold text-sm shadow transition active:scale-98"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default UncontrolledFeedbackForm;
