import React from 'react';
import { Markdown } from './markdowns/Markdown';

const markdown = `## More Info    

### Prerequisites

For all packages except @baze/paginator, react-dom and react above version 16 is recommended:

~~~js
"react": ">=16.0.0",
"react-dom": ">=16.0.0"
~~~

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Blagoj5/pagination/tags).

### Authors

- **[Blagoj Petrov](https://github.com/Blagoj5)**

### Security

This project doesn’t have any security concerns.

### License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Blagoj5/pagination/blob/main/LICENSE) file for details
`;

export const MoreInfo: React.FC = () => {
  return <Markdown markdown={markdown} />;
};
