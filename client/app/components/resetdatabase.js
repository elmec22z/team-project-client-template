import React from 'react';
import {resetDatabase} from '../server';


/**
 * Reset database button.
 */
class default class ResetDatabase extends React.Component {
  render() {
    return (
      <button className="btn btn-default" type="button" onClick={() => {
        resetDatabase();
        window.alert("Database reset! Refreshing the page now...");
        document.location.reload(false);
        });
      }}>Reset Mock DB</button>
    );
  }
}
