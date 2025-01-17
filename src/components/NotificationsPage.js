import React, { useState } from 'react';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  const refreshNotifications = () => {
    setNotifications(['Notification 1', 'Notification 2']); // Replace with API call.
  };

  return (
    <div>
      <h1>Notifications</h1>
      <button className="button" onClick={refreshNotifications}>
        Refresh Notifications
      </button>
      <ul>
        {notifications.map((notif, index) => (
          <li key={index}>{notif}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPage;
