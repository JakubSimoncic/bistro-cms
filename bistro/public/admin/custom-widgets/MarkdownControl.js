import React from 'react';

const MarkdownControl = ({ value, onChange }) => {
  return (
    <textarea
      value={value || ''}
      onChange={e => onChange(e.target.value)}
      style={{ width: '100%', height: '300px', fontFamily: 'monospace', fontSize: '14px' }}
    />
  );
};

export default MarkdownControl;
