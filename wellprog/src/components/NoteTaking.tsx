import React, { useState } from 'react';

const NoteTaking: React.FC = () => {
  const [note, setNote] = useState('');

  const handleSave = () => {
    // Save note functionality
    console.log('Note saved:', note);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes here..."
        className="w-full p-2 border rounded"
      />
      <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded mt-2">Save Note</button>
    </div>
  );
};

export default NoteTaking;
