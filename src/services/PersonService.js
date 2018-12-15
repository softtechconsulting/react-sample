import _ from 'lodash';

const personIndex = {};

function findAll() {
  return _.sortBy(_.values(personIndex), "name");
}

function update(person) {
  const {id, ...properties} = person;
  const currentPerson = personIndex[id];
  if (!currentPerson) {
    return Promise.reject(new Error("Invalid person id: " + id));
  }
  const updatedPerson = _.merge(currentPerson, properties);
  personIndex[id] = updatedPerson;
  return Promise.resolve(updatedPerson);
}

const PersonService = {
  findAll,
  update
};

export default PersonService;

const data = [
  {
    "id": "3bd20db4-080d-48c2-972d-cb47631570f6",
    "eyeColor": "brown",
    "name": {
      "first": "Robbins",
      "last": "Chen"
    },
    "company": "KEGULAR",
    "email": "robbins.chen@kegular.biz",
    "phone": "+1 (998) 418-3974",
    "address": "346 School Lane, Fostoria, Idaho, 7755"
  },
  {
    "id": "da7758d6-d459-4ae6-9596-690bef88463a",
    "eyeColor": "brown",
    "name": {
      "first": "Lily",
      "last": "Trevino"
    },
    "company": "QUORDATE",
    "email": "lily.trevino@quordate.ca",
    "phone": "+1 (857) 426-3323",
    "address": "732 George Street, Gouglersville, Federated States Of Micronesia, 991"
  },
  {
    "id": "f433bbd6-1e61-4a68-a2e9-38673c6a719e",
    "eyeColor": "brown",
    "name": {
      "first": "Herman",
      "last": "Lara"
    },
    "company": "ANIXANG",
    "email": "herman.lara@anixang.tv",
    "phone": "+1 (936) 419-2190",
    "address": "323 Aurelia Court, Goldfield, American Samoa, 7528"
  },
  {
    "id": "618b411e-dfa0-46b1-b112-aa5db2720a87",
    "eyeColor": "blue",
    "name": {
      "first": "Hamilton",
      "last": "Watkins"
    },
    "company": "QUILM",
    "email": "hamilton.watkins@quilm.co.uk",
    "phone": "+1 (890) 440-2949",
    "address": "879 Laurel Avenue, Waterford, Alabama, 3034"
  },
  {
    "id": "fb22da3a-dfe1-4989-a0fe-9be4daf5e3f2",
    "eyeColor": "brown",
    "name": {
      "first": "Jodi",
      "last": "Stanton"
    },
    "company": "NURPLEX",
    "email": "jodi.stanton@nurplex.org",
    "phone": "+1 (815) 496-3250",
    "address": "527 Lenox Road, Kapowsin, Hawaii, 6287"
  },
  {
    "id": "d5f1f297-b21b-4f32-9b65-ebcb8116c3d8",
    "eyeColor": "green",
    "name": {
      "first": "Kayla",
      "last": "Wyatt"
    },
    "company": "PETICULAR",
    "email": "kayla.wyatt@peticular.com",
    "phone": "+1 (979) 541-2050",
    "address": "483 Saratoga Avenue, Camas, Alaska, 3284"
  },
  {
    "id": "47fda3d1-524d-4114-9165-37dd88b6dd89",
    "eyeColor": "blue",
    "name": {
      "first": "Moody",
      "last": "Stark"
    },
    "company": "PEARLESSA",
    "email": "moody.stark@pearlessa.net",
    "phone": "+1 (896) 540-3435",
    "address": "544 Monument Walk, Emory, South Dakota, 6987"
  }
];

data.forEach(person => {personIndex[person.id] = person});
