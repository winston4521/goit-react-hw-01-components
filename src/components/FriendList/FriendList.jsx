import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem.jsx';
import { FriendListUl } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <FriendListUl>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        id={id}
      />
    ))}
  </FriendListUl>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
