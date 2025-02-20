import React, { useEffect, useState } from 'react';

const LocalStorageViewer = () => {
  const [localStorageContent, setLocalStorageContent] = useState({});

  useEffect(() => {
    const content = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      content[key] = localStorage.getItem(key);
    }
    setLocalStorageContent(content);
  }, []);

  return (
    <div>
      <h2>Local Storage Content</h2>
      <ul className="local-storage-list">
        {Object.keys(localStorageContent).map((key) => (
          <li key={key}>
            <strong>{key}:</strong> {localStorageContent[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocalStorageViewer;