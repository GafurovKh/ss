import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
Layout.propTypes={
  children: PropTypes.node,
}
export default Layout;