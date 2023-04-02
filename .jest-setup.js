import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

// Unofficial adapter for React 18
Enzyme.configure({ adapter: new Adapter() });
