import React, { useState } from 'react';

// Mock Data
const domains = ['Technical', 'Logical Skills', 'Verbal Skills', 'Arithmetic Skills', 'Electrical Skills'];

type DomainTracks = {
  [key: string]: {
    [key: string]: string[]; // track: [course]
  };
};

const domainTracks: DomainTracks = {
  Technical: {
    'Web Development': ['ReactJS', 'Angular', 'VueJS'],
    'App Development': ['Flutter', 'Swift', 'Kotlin'],
    'Data Analytics': ['PowerBI', 'Tableau', 'Excel'],
  },
  'Logical Skills': {
    'Problem Solving': ['Puzzle 1', 'Puzzle 2'],
    'Critical Thinking': ['Course 1', 'Course 2'],
  },
  'Verbal Skills': {
    'Communication': ['Course A', 'Course B'],
    'Public Speaking': ['Course C', 'Course D'],
  },
  'Arithmetic Skills': {
    'Basic Math': ['Addition', 'Subtraction'],
    'Advanced Math': ['Algebra', 'Calculus'],
  },
  'Electrical Skills': {
    'Circuit Design': ['Design 1', 'Design 2'],
    'Electronics': ['Electronics 1', 'Electronics 2'],
  },
};

const authors = ['Akash', 'Prakash', 'Karan'];

const initialData = {
  'Web Development': {
    'ReactJS': {
      'Akash': [
        { title: 'Video 1', link: 'http://example.com', imageUrl: 'http://example.com/image.jpg', status: 'started', notes: 'Note 1' },
        // Other resources...
      ]
    }
  }
};

const StatusOptions = ['started', 'in progress', 'done', 'blocked'];

const HierarchicalDataDisplay: React.FC<{ data: any }> = ({ data }) => {
  const renderHierarchy = (data: any) => {
    return (
      <ul>
        {Object.keys(data).map((key) => (
          <li key={key}>
            {key}
            {typeof data[key] === 'object' ? renderHierarchy(data[key]) : null}
          </li>
        ))}
      </ul>
    );
  };

  return <div className="p-4 bg-gray-100 rounded-lg shadow-md">{renderHierarchy(data)}</div>;
};

const Form: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState('started');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ title, link, imageUrl, status, notes });
    onClose(); // Close the form after submission
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Video/Resource</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Video/Resource Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Video/Resource Link</label>
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Video/Resource Image URL</label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Video/Resource Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border p-2 w-full rounded"
          >
            {StatusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Additional Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            Submit
          </button>
          <button type="button" onClick={onClose} className="ml-4 bg-gray-300 text-gray-800 py-2 px-4 rounded-lg">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const MainComponent: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string | undefined>(undefined);
  const [selectedTrack, setSelectedTrack] = useState<string | undefined>(undefined);
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined);
  const [selectedAuthor, setSelectedAuthor] = useState<string | undefined>(undefined);
  const [showForm, setShowForm] = useState(false);

  const handleProceed = () => {
    if (selectedTrack && selectedCourse && selectedAuthor) {
      setShowForm(true);
    }
  };

  const handleDomainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const domain = e.target.value;
    setSelectedDomain(domain);
    setSelectedTrack(undefined); // Reset track and course selection when domain changes
    setSelectedCourse(undefined);
    setSelectedAuthor(undefined);
  };

  const handleTrackChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTrack(e.target.value);
    setSelectedCourse(undefined); // Reset course selection when track changes
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-gray-700">Skill Domain</label>
          <select
            value={selectedDomain}
            onChange={handleDomainChange}
            className="border p-2 w-full rounded"
          >
            <option value="">Select Domain</option>
            {domains.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Track Name</label>
          <select
            value={selectedTrack}
            onChange={handleTrackChange}
            className="border p-2 w-full rounded"
            disabled={!selectedDomain}
          >
            <option value="">Select Track</option>
            {selectedDomain && domainTracks[selectedDomain]
              ? Object.keys(domainTracks[selectedDomain]).map((track) => (
                  <option key={track} value={track}>
                    {track}
                  </option>
                ))
              : <option value="">No Tracks Available</option>
            }
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Course Name</label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="border p-2 w-full rounded"
            disabled={!selectedTrack}
          >
            <option value="">Select Course</option>
            {selectedTrack && selectedDomain && domainTracks[selectedDomain]
              ? domainTracks[selectedDomain][selectedTrack]?.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))
              : <option value="">No Courses Available</option>
            }
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Author Name</label>
          <select
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
            className="border p-2 w-full rounded"
            disabled={!selectedCourse}
          >
            <option value="">Select Author</option>
            {authors.map((author) => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleProceed}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          disabled={!selectedAuthor}
        >
          Proceed
        </button>
      </div>

      {showForm && <Form onClose={() => setShowForm(false)} />}

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Existing Data</h2>
        <HierarchicalDataDisplay data={initialData} />
      </div>
    </div>
  );
};

export default MainComponent;
