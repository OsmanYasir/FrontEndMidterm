import React, { useState } from 'react'

function ProjectApp() {
    const [title, setTitle] = useState('');
    var md5 = require("md5"); 
    
  return (
    <div className='div'>
        <textarea
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        >
        </textarea>
        <p>{'MD5 Hash: ' +md5(title)}</p>
        
    </div>
  )
}

export default ProjectApp