import React from 'react';

import Link from 'next/link';

function NavBar(props) {
  return (
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href={'/'}>
            <a className="navbar-item">
              <h1>Sistema</h1>
            </a>
          </Link>
          <Link href={'/pss'}>
              <a className="navbar-item">
                PSS
              </a>
          </Link>
        </div>
      </nav>
  );
}

export default NavBar;