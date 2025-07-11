
Command : npx expo start
Screen Recording : https://drive.google.com/file/d/1GCkR2rGg1OcA_2mZYC1tJgLCTBinAVnC/view?usp=drive_link




🚀 Features
Create and manage Businesses and their Articles

Offline-first experience with local data storage using RxDB

Seamless sync to CouchDB when the device is back online

Network detection using @react-native-community/netinfo

Data consistency with document versioning and conflict handling

📦 Tech Stack
React Native (with Expo)

RxDB (with SQLite as storage engine)

CouchDB (for cloud-based replication)

NetInfo (network monitoring)

uuid (for generating document IDs)

▶️ How to Run the Project
1. Install CouchDB
Download and install CouchDB: https://couchdb.apache.org/

Access CouchDB at: http://127.0.0.1:5984/_utils

Create two databases manually:

businesses

articles

Enable CORS in CouchDB configuration if you're testing on a physical device.
