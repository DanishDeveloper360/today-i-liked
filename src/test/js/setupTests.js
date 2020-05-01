import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@scopus/components';
import '@scopus/stylesheet';

Enzyme.configure({ adapter: new Adapter() });
