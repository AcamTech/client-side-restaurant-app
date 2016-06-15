export default {
  QUEUED: {
    cancel: {
      oldState: 'QUEUED',
      newState: 'CANCELED',
      actor: 'waiter',
      action: 'cancel'
    },
    accept: {
      oldState: 'QUEUED',
      newState: 'IN_PROCESS',
      actor: 'kitchen',
      action: 'accept'
    },
    reject: {
      oldState: 'QUEUED',
      newState: 'REJECTED',
      actor: 'kitchen',
      action: 'reject'
    }
  },
  IN_PROCESS: {
    finish: {
      oldState: 'IN_PROCESS',
      newState: 'READY',
      actor: 'kitchen',
      action: 'finish'
    },
    cancel: {
      oldState: 'IN_PROCESS',
      newState: 'CANCELED',
      actor: 'waiter',
      action: 'cancel'
    },
    request: {
      oldState: 'IN_PROCESS',
      newState: 'CHANGE_REQ',
      actor: 'waiter',
      action: 'request_changes'
    }
  },
  REJECTED: {
    cancel: {
      oldState: 'REJECTED',
      newState: 'CANCELED',
      actor: 'waiter',
      action: 'cancel'
    },
    request: {
      oldState: 'REJECTED',
      newState: 'CHANGE_REQ',
      actor: 'waiter',
      action: 'request_changes'
    }
  },
  CHANGE_REQ: {
    accept: {
      oldState: 'CHANGE_REQ',
      newState: 'IN_PROCESS',
      actor: 'kitchen',
      action: 'accept_changes'
    },
    reject: {
      oldState: 'CHANGE_REQ',
      newState: 'REJECTED',
      actor: 'kitchen',
      action: 'reject_changes'
    }
  },
  READY: {
    deliver: {
      oldState: 'READY',
      newState: 'DELIVERED',
      actor: 'waiter',
      action: 'deliver'
    },
    client_reject: {
      oldState: 'READY',
      newState: 'CLIENT_REJECTED',
      actor: 'waiter',
      action: 'client_reject'
    }
  },
  CLIENT_REJECTED: {
    restart: {
      oldState: 'CLIENT_REJECTED',
      newState: 'QUEUED',
      actor: 'waiter',
      action: 'restart'
    },
    cancel: {
      oldState: 'CLIENT_REJECTED',
      newState: 'CANCELED',
      actor: 'waiter',
      action: 'cancel'
    }
  }
};
