import './Editor.css'

const editorStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'cetnter',
  alignItems: 'center',
  margin: '5px',
  gap: '15px',
};

export default function Editor() {
  return (
    <div className="editor" style={editorStyles}>
      <h2 className="heading">SQL Editor</h2>
      <div className="playground">
        <div className="schema">Schema</div>
        <div className="query-editor">Query Editor</div>
      </div>
    </div>
  );
}
