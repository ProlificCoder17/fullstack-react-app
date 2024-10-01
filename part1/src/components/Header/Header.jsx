import PropTypes from 'prop-types'

const Header = ({ count }) => {

  return (
    <div>
        count:{count}
    </div>
  )
}

Header.propTypes = {
    count: PropTypes.number.isRequired,
};

export default Header