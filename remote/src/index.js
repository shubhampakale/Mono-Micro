import React from 'react';
import { createRoot } from 'react-dom/client';
import RemoteComponent from './RemoteComponent';

const root = createRoot(document.getElementById('root'));
root.render(<RemoteComponent />);
