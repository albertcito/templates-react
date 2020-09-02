import React from 'react';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='content-width'>
        <span className='logo'>
          Made with ♥ by
          {' '}
          <a
            href='https://albertcito.com'
            target='_blank'
            rel='noopener noreferrer'
            title='Go to Albert Tjornehoj webpage'
          >
            Albert Tjornehoj
          </a>
        </span>
      </div>
    </footer>
  );
}
