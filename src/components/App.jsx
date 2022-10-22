import profile from './jsonFiles/user.json';
import data from './jsonFiles/data.json';
import friends from './jsonFiles/friends.json';
import transactions from './jsonFiles/transactions.json';
import { Statistics } from './Statistics/statistics';
import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/profile';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        followers={profile.stats.followers}
        views={profile.stats.views}
        likes={profile.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
