import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'components/dist/scopus-components';
import 'stylesheet/dist/scopus-stylesheet';

Enzyme.configure({ adapter: new Adapter() });
