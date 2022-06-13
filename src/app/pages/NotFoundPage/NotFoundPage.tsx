import { ReactElement } from 'react';

import { NotFound } from 'app/domains/Common/components/not-found';

const NotFoundPage = (): ReactElement => <NotFound msg="Page not found. Check the address or" />;

export default NotFoundPage;
