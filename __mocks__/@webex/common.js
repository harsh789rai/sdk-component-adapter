export const deconstructHydraId = (ID) => {
  if (ID.includes('PEOPLE')) return {type: 'PEOPLE'};
  if (ID.includes('ROOM')) return {type: 'ROOM'};
  if (ID.includes('personID')) return {type: 'PEOPLE', id: ID, cluster: 'us'};
  if (ID.includes('organizationID')) return {type: 'ORGANIZATION', id: ID, cluster: 'us'};
  if (ID.includes('123')) return {type: 'ROOM', id: ID, cluster: 'us'};

  return {};
};

// eslint-disable-next-line no-unused-vars
export const constructHydraId = (type, id, cluster = 'us') => id;

export const SDK_EVENT = {
  EXTERNAL: {
    EVENT_TYPE: {
      CREATED: 'created',
      DELETED: 'deleted',
    },
  },
};
