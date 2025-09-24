import React, { Suspense } from 'react';

const RemoteComponent = React.lazy(() => import('remote/RemoteComponent'));

function App() {
  return (
    <div>
      <h1>Host Micro Frontend</h1>
      <Suspense fallback={<div>Loading Remote...</div>}>
        <RemoteComponent />
      </Suspense>
    </div>
  );
}

export default App;
