const React = require('react');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta chaSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </head>
      <body />
    </html>
  );
};
