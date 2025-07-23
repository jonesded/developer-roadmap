import { _ as __vite_glob_2_11, a as __vite_glob_2_10, b as __vite_glob_2_9, c as __vite_glob_2_8, d as __vite_glob_2_7, e as __vite_glob_2_6, f as __vite_glob_2_5, g as __vite_glob_2_4, h as __vite_glob_2_3, i as __vite_glob_2_2, j as __vite_glob_2_1, k as __vite_glob_2_0 } from './sql_CVVaw0yS.mjs';
import slugify from 'slugify';
import { g as getAllAuthors } from './author_BfF8YtJE.mjs';
import { c as getAllGuides } from './guide_CTGroPUz.mjs';

const anomalyDetection = "Some common techniques include:\n\n- Adding and implementing validation rules to prevent invalid data entry. Through the definition of schemas and schema constraints to enforce certain minimum standards, you can prevent data anomalies from happening.\n- Implement data versioning to easily revert back if there are any anomalies detected.\n- Implement a strong data quality practice to ensure that whatever information enters your system is properly validated and flagged if required.\n";

const __vite_glob_1_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: anomalyDetection
}, Symbol.toStringTag, { value: 'Module' }));

const apiDependencies = "A great way to handle API dependencies in backend systems is to take advantage of API versioning. Through this simple practice, you can ensure that your systems are actually using the right API, even if there are multiple versions of it.\n\nThis also allows you to have multiple backend systems using different versions of the same API without any risk of inconsistency or of updates breaking your systems.";

const __vite_glob_1_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: apiDependencies
}, Symbol.toStringTag, { value: 'Module' }));

const apiEndpoint = "An API endpoint is a specific URL that acts as an entry point into a specific service or a functionality within a service.\n\nThrough an API endpoint, client applications can interact with the server sending requests (sometimes even with data in the form of payload) and receive a response from it.\n\nUsually, each endpoint can be mapped to a single feature inside the server.";

const __vite_glob_1_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: apiEndpoint
}, Symbol.toStringTag, { value: 'Module' }));

const apiTests = "As backend developers, we have to think about the types of tests that there are out there.\n\n- **Unit tests:** Always remember to only test the relevant logic through the public interface of your code (avoid testing private methods or inaccessible functions inside your modules). Focus on the business logic and don’t try to test the code that uses external services (like a database, the disk or anything outside of the piece of code you’re testing).\n- **Integration tests:** Test the full endpoint through its public interface (the actual HTTP endpoint) and see how it integrates with the external services it’s using (i.e the database, another API, etc).\n- **Load testing / performance testing:** You might want to also check how the new endpoint behaves under heavy stress. This might not be required depending on the API you’re using, but as a rule of thumb, it’s a good one to perform at the end of the development phase before releasing the new endpoint into prod.";

const __vite_glob_1_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: apiTests
}, Symbol.toStringTag, { value: 'Module' }));

const apiVersioning = "There are several ways in which you can handle API versioning, but the most common ones are:\n\n- **Keeping the version in the URL:** Either as a URL attribute (i.e /your-api/users?v=1) or as part of the URL (i.e /v1/your-api/users). In both situations the version is clearly visible to the developer using the API.\n- **Using a custom header:** Another option is to have a custom header (such as api-version) where the developer must specify the version of your API they intend to use.";

const __vite_glob_1_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: apiVersioning
}, Symbol.toStringTag, { value: 'Module' }));

const batchProcessing = "The best option here would be to use a batch-processing framework such as Hadoop or Spark. They are already prepared to process massive amounts of data in parallel.";

const __vite_glob_1_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: batchProcessing
}, Symbol.toStringTag, { value: 'Module' }));

const benefitsDrawbacksMicroservices = "Benefits:\n\n- **Scalability:** microservices can scale independently from each other.\n- **Tech flexibility:** you can use different tech stacks depending on the particular needs of each microservice.\n- **Faster deployments:** microservices can be deployed individually, improving the speed at which you deliver changes to production.\n\nDrawbacks:\n\n- **Over complex architecture.** In some situations, a microservice-based architecture can grow to be too complex to manage and orchestrate.\n- **Debugging:** Debugging problems in a microservices-based architecture can be difficult as data flows through multiple services during a single request.\n- **Communication overhead:** Compared to a monolithic approach, communication between microservices can be overly complex.";

const __vite_glob_1_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: benefitsDrawbacksMicroservices
}, Symbol.toStringTag, { value: 'Module' }));

const bgTasks = "It highly depends on your tech stack and what those background tasks are doing. And because of that, there are many options:\n\n- Using task queues such as RabbitMQ or Amazon SQS. These will let you have workers in the background as secondary processes while your application continues working.\n- There are background job frameworks such as [Celery for Python](https://github.com/celery/celery) or [Sidekiq for Ruby](https://github.com/sidekiq/sidekiq).\n- You can also just rely on cron jobs if you want.\n- If your programming language permits it, you can also use threads or workers to run these tasks in the background but within the same application.\n";

const __vite_glob_1_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: bgTasks
}, Symbol.toStringTag, { value: 'Module' }));

const blueGreenDeployment$1 = "The blue-green strategy involves having two identical production environments, having one of them serving real traffic while the other is getting ready to be updated with the next release or just idle, waiting to be used as a backup.";

const __vite_glob_1_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: blueGreenDeployment$1
}, Symbol.toStringTag, { value: 'Module' }));

const cacheEviction = "To define this strategy, you’ll need to define the following elements:\n\n- The size limit that will trigger the cache eviction when exceeded.\n- A monitoring strategy to determine if the eviction strategy is working properly or if it needs adjustment.\n- A cache invalidation mechanism.\n- And an eviction policy, which could be one of the following:\n  - **LRU (Least Recently Used):** Evict the least recently accessed items.\n  - **LFU (Least Frequently Used):** Remove items accessed least frequently.\n  - **FIFO (First-In, First-Out):** Evict items in the order they were added.\n  - **Random:** Randomly select items to evict.\n  - **TTL (Time-To-Live):** Expire items after a certain time.";

const __vite_glob_1_9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cacheEviction
}, Symbol.toStringTag, { value: 'Module' }));

const capTheorem = "![CAP Theorem](https://assets.roadmap.sh/guest/cap-theorem.png)\n\nThe CAP theorem says that distributed databases can’t simultaneously provide more than two of the following guarantees:\n\n- Data Consistency: Meaning that every read is always returning the most recent result of the write operation. This is very relevant in this model because we’re dealing with multiple servers and data needs to be replicated almost immediately to guarantee consistency.\n- Availability: Meaning that every request will always receive a valid response.\n- Partition tolerance: The distributed system continues to operate and work without data loss even during partial network outages.\n\nFor example, if the system is consistent and highly available, it won’t be able to withstand partial network outages. If on the other hand, the system is highly available and partition tolerant, it won’t be able to ensure immediate data consistency.";

const __vite_glob_1_10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: capTheorem
}, Symbol.toStringTag, { value: 'Module' }));

const ciCd = "There are multiple considerations to have while setting up Continuous Integration and Continuous Delivery pipelines:\n\n- **Using source control** as the trigger for the entire process (git for example). The build pipelines for your backend services should get executed when you push your code into a specific branch.\n- **Pick the right CI/CD** platform for your needs, there are many out there such as GitHub Actions, GitLab CI/CD, CircleCI and more.\n- Make sure you have **automated unit tests** that can be executed inside these pipelines.\n- **Automatic deployment** should happen only if all tests are executed successfully, otherwise, the pipeline should fail, preventing broken code from reaching any environment.\n- **Use an artifact repository** such as JFrog Artifactory or Nexus Repository to store successfully built services.\n- Finally, consider setting up a **rollback strategy** in case something goes wrong and the final deployed version of your service is corrupted somehow.\n";

const __vite_glob_1_11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: ciCd
}, Symbol.toStringTag, { value: 'Module' }));

const containerization = "It’s a lightweight virtualization method to package applications and their dependencies, ensuring consistent environments across different systems.\n\nIt’s actually a benefit for backend development because it provides isolation and portability by simplifying deployment processes and reducing conflicts between software versions and configurations.";

const __vite_glob_1_12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: containerization
}, Symbol.toStringTag, { value: 'Module' }));

const correlationIds = "Correlation IDs are unique identifiers added on requests done to distributed architectures to facilitate tracking of requests throughout the architecture. Remember that usually, when a request hits a distributed backend system, the data from the request passes through multiple web services before generating a response.\n\nThis makes it easy to understand the journey each request goes through to debug any potential problems or performance issues.";

const __vite_glob_1_13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: correlationIds
}, Symbol.toStringTag, { value: 'Module' }));

const dataEncryption = "For this type of application, you have to distinguish between “data at rest” and “data in transit”. The first one describes your data while it’s stored in your database (or any data storage you have). And the latter (data in transit) describes your data while it’s traveling between backend services or even between the server and the client.\n\nFor “data in transit”, you should be ensuring that connection happens inside a secure and encrypted channel such as HTTPS.\n\nAnd for “data at rest” use strong encryption algorithms such as [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard), [RSA](https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29) or [ECC](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography) and make sure to keep their associated keys somewhere safe, such as inside a dedicated secrets management tool or key management services (KMS).";

const __vite_glob_1_14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataEncryption
}, Symbol.toStringTag, { value: 'Module' }));

const dbConnections = "During a high-load scenario, there are several things a developer can do to improve the performance of the database connection:\n\n- Using connection pools to reuse connections reduces the time required to establish a new one.\n- Load balancing the database traffic (the queries) between a group of databases would help distribute the load.\n- Even optimizing your queries can reduce the time you’re using each connection, helping you optimize the use of resources and minimizing the time you’re spending with each active connection.";

const __vite_glob_1_15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dbConnections
}, Symbol.toStringTag, { value: 'Module' }));

const deadlockDbTransaction = "There are many ways to prevent deadlocks in DB transactions; some of the most common are:\n\n- Using lock ordering to acquire locks in a consistent global order, avoiding circular wait conditions.\n- Using timeouts for DB transactions to automatically kill long-running operations that could lead to deadlocks.\n- Use of optimistic concurrency control where possible, to avoid holding locks for too long.";

const __vite_glob_1_16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: deadlockDbTransaction
}, Symbol.toStringTag, { value: 'Module' }));

const debuggingBackend = "If the backend application being debugged is in the local dev machine, a simple solution would be to use the IDE itself. Most modern IDEs, such as IntelliJ, Eclipse and others have integrated debugging capabilities.\n\nIf the backend application is on the server though, you’ll have to use other techniques, such as logging, which you can do with logging libraries. Or, you can use more complex tools such as JProfiler or NewRelic.";

const __vite_glob_1_17 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: debuggingBackend
}, Symbol.toStringTag, { value: 'Module' }));

const decomposeMicroservices = "Microservices are a software architecture style that allows you to structure your backend applications as a collection of independent services, each one working around a specific business need.\n\nIf you’re looking to decompose a monolith into a set of microservices, you have to keep the following points in mind:\n\n- Start by identifying the logical boundaries of your monolith. Its inner logic will tackle multiple responsibilities and types of resources. Find the boundaries between them to understand where one service starts and another one ends.\n- Define your services based on the boundaries from the previous point and start decoupling the data needs as well. Either into multiple tables or even individual databases whenever it makes sense.\n- Start incrementally refactoring the monolith and extracting the logic required for each individual microservice into its own project.\n\nBy the time you’re done, your original monolith should not be needed anymore, and all your microservices will have their own independent deployment pipeline and code repository.";

const __vite_glob_1_18 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: decomposeMicroservices
}, Symbol.toStringTag, { value: 'Module' }));

const distributedCaching = "In this scenario, you have to consider the following points:\n\n- Implement a **cluster of servers** that will all act as the distributed cache.\n  Implement a **data sharding** process to evenly distribute the data amongst all cache servers and make sure it uses a consistent hashing algorithm to minimize cache reorganization when a server joins or leaves the cluster.\n- Add **cache replication** to have redundancy of your data in case of a failure, that way, your distributed cache is fault-tolerant as well.\n- **Cache invalidation** is a must on any caching solution, as your data will become stale if you don’t update it often.";

const __vite_glob_1_19 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: distributedCaching
}, Symbol.toStringTag, { value: 'Module' }));

const eventualConsistency = "![Eventual Consistency](https://assets.roadmap.sh/guest/eventual-consistency-zoh2b.png)\n\nEventual consistency is a consistency model used in distributed computing. This model guarantees that any piece of information written into a distributed system will become consistent (meaning that all servers will have the same version of this data) eventually as opposed to others where immediate consistency is assured.\n\nFor backend systems this implies that there is a need for data synchronization between all parts of the distributed system and on top of that, a potential need to resolve data conflicts, if different parts of your system are dealing with different versions of the same data record.";

const __vite_glob_1_20 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: eventualConsistency
}, Symbol.toStringTag, { value: 'Module' }));

const faultTolerance = "Database replication implies the replication of data across multiple instances of the same database. In this scenario, there is usually one database that’s acting as a master to all clients that are connecting it, and the rest act as “slaves” where they simply receive updates on the data being changed/added.\n\nThe two main implications of this in fault tolerance are:\n\n- A database cluster can withstand problems on the master server by promoting one of the slaves without losing any data in the process.\n- Slaves can be used as read-only servers, increasing the amount of read requests that can be performed on the data without affecting the performance of the database.";

const __vite_glob_1_21 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: faultTolerance
}, Symbol.toStringTag, { value: 'Module' }));

const fileUploads = "From a backend developer perspective, the following considerations should be taken into account when handling file uploads regardless of the programming language you’re using:\n\n- **Perform server-side validations.** Validate that the size of your file is within range, and that the file is of the required type. You can check [this OWASP guide](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html) for more details.\n- **Use secure channels.** Make sure the file upload is done through an HTTPS connection.\n- **Avoid name collision.** Rename the file ensuring the new filename is unique within your system. Otherwise this can lead to application errors by not being able to save the uploaded files.\n- **Keep metadata about your files.** Store it in your database or somewhere else, but make sure to keep track of it, so you can provide extra information to your users. Also, if you’re renaming the files for security and to avoid name collisions, keep track of the original filename in case the file needs to be downloaded back by the user.\n";

const __vite_glob_1_22 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: fileUploads
}, Symbol.toStringTag, { value: 'Module' }));

const fulltextSearch = "You can use the native full-text search functionality of a database, such as MySQL, Postgre or even ElasticSearch.\n\nHowever, if you want to implement it yourself, the steps would be:\n\n- Preprocessing the text data to be searched and normalizing it by applying tokenization, stemming and removing stop words.\n- Then, implement an inverted index, somehow relating each unique word to the records that contain that word.\n- Create a search UI and normalize the input from the user in the same way the text data was normalized.\n- Then, search for each word in the database.\n- Sort the results by implementing a scoring logic based on different aspects, such as word frequency.";

const __vite_glob_1_23 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: fulltextSearch
}, Symbol.toStringTag, { value: 'Module' }));

const gdprCompliance = "The following are key considerations to be taken into account:\n\n- Capture only what you need and what you told your users you’d capture. Remember that to comply with GDPR, you have to ask for your user’s consent to collect their data, and you have to specify the actual data points you’re collecting. So focus on those and nothing else.\n- Secure your data. As part of the regulations, you have to make sure your data is secured both in transit and at rest. There are regular security audits that have to happen to ensure security is kept high.\n- The user has rights over the data you’ve captured, so make sure you give them the right endpoints or services to read it, edit it or even remove it if they want.";

const __vite_glob_1_24 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: gdprCompliance
}, Symbol.toStringTag, { value: 'Module' }));

const highAvailableStorage = "Building a highly available data storage involves multiple areas, including:\n\n- **Multi-zone environments.** If you’re going with cloud-based solutions (such as Azure, AWS, GCP or others) then you’re likely to have this requirement met instantly (except for some specific regions in the world). This is to ensure availability even during partial network outages.\n- **Data replication.** Ensure your data is being replicated between servers of all zones. This is to ensure that if there is a failure taking some servers down (or even entire zones) there is no data loss.\n- **Load balancing.** Ensure the traffic is properly load-balanced between all your availability zones to ensure the lowest latency for all your clients.\n- And then there are other requirements like setting up a proper data governance policy to ensure data access is regulated, as well as fully complying with your local data regulations (like GDPR).";

const __vite_glob_1_25 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: highAvailableStorage
}, Symbol.toStringTag, { value: 'Module' }));

const httpRequestResponseCycle = "The HTTP protocol is very structured and consists of a very well-defined set of steps:\n\n- **Open the connection.** The client opens a TCP connection to the server. The port will be port 80 for HTTP connections and 443 for HTTPS (secured) connections.\n- **Send the request.** The client will now send the HTTP request to the server. The request contains the following information:\n  - An [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods). It can be any of them (i.e. GET, POST, PUT, DELETE, etc).\n  - A URI (or Uniform Resource Identifier). This specifies the location of the resources on the server.\n  - The HTTP version (usually HTTP/1.1 or HTTP/2).\n  - A set of headers. They include extra data related to the request; there is a [full list of HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) that can be used here.\n  - The optional body. Depending on the type of request, you’ll want to also send data, and the data is encoded inside the body of the request.\n- **Request processed by the server.** At this stage, the server will process the request and prepare a response.\n- **Send the HTTP response back to the client.** Through the open channel, the server sends back an HTTP response. The response will contain the following elements:\n  - The HTTP Version.\n  - The status code. There is a list of [potential status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) that describe the result of the request.\n  - A set of headers with extra data.\n  - The optional body, just like with the request, the body of the response is optional.\n- **The connection is closed.** This is usually the last step, although with newer versions of the protocol, there are options to leave the channel open and continue sending requests and responses back and forth.";

const __vite_glob_1_26 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: httpRequestResponseCycle
}, Symbol.toStringTag, { value: 'Module' }));

const idempotency = "For REST APIs you can take advantage of HTTP verbs and define your idempotent operations using inherently idempotent verbs, such as GET, PUT, and DELETE.\n\nOr you can always manually implement a key-based logic to avoid repeating the same operation multiple times if the key provided by the client is always the same.";

const __vite_glob_1_27 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: idempotency
}, Symbol.toStringTag, { value: 'Module' }));

const instrumentMonitor = "A great way to monitor the performance of backend applications is to use an Application Performance Management system (APM) such as New Relic, AppDynamics or even Dynatrace.\n\nThose will track your application’s performance and provide insight into the bottlenecks you might have with minimum effort on your part.";

const __vite_glob_1_28 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: instrumentMonitor
}, Symbol.toStringTag, { value: 'Module' }));

const iotStreams = "![IOT Data Streams](https://assets.roadmap.sh/guest/iot-data-streams-ks8vn.png)\n\nA real-time data capture and processing architecture would require the following components:\n\n- Use a scalable data ingestion service such as [Kafka](https://kafka.apache.org/) or [AWS Kinesis](https://aws.amazon.com/es/pm/kinesis/) that is compatible with one of the many IoT standard protocols (like MQTT or CoAP).\n- Process the data through real-time processing engines such as Apache Flink or Spark Streaming.\n- Store the data inside a scalable data lake, ideally a time-series compatible system such as [InfluxDB](https://www.influxdata.com/).\n";

const __vite_glob_1_29 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: iotStreams
}, Symbol.toStringTag, { value: 'Module' }));

const loadBalancedSession = "In a load-balanced application scenario, the main issue with session state is that if the backend system is handling session data in memory, then subsequent requests from the same client need to land on the same server, otherwise session data is fragmented and useless.\n\nThere are two main ways to solve this problem:\n\n- Sticky sessions: This allows you to configure the load balancer to redirect requests from the same client into the same server every time. The downside with this one, is that the traffic is not always equally distributed among all copies of your backend services.\n- Centralized session store: This solution involves taking the session data outside of your backend services into a centralized data store that all copies of your service can access. This makes it easier on the load balancer, but requires extra logic and more “moving parts”.\n\nIt’s up to you and your specific technical requirements to determine which strategy works best for you.";

const __vite_glob_1_30 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: loadBalancedSession
}, Symbol.toStringTag, { value: 'Module' }));

const loadTestingApi = "- First you have to understand the goals and set up a testing environment. Ideally, your environment would closely resemble production.\n- Design and implement your tests with the tools you’ve selected (such as [JMeter](https://jmeter.apache.org/), [LoadRunner](https://www.opentext.com/products/loadrunner-enterprise) or any other).\n- Start to gradually increase the load on your tests while monitoring the performance and stability of your system.\n- Optimize your backend API and go back to the first step to redesign your tests and try again until you’re happy with the results.\n";

const __vite_glob_1_31 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: loadTestingApi
}, Symbol.toStringTag, { value: 'Module' }));

const longRunning = "![Long-running processes](https://assets.roadmap.sh/guest/long-running-sn5fc.png)\n\nFor web requests that trigger long-running processes, the best option is to implement a reactive architecture. This means that when a service receives a request, it will transform it into a message inside a message queue, and the long-running process will pick it up whenever it’s ready to do so.\n\nIn the meantime, the client sending this request receives an immediate response acknowledging that the request is being processed. The client itself can also be connected to the message queue (or through a proxy) and waiting for a “ready” event with its payload inside.";

const __vite_glob_1_32 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: longRunning
}, Symbol.toStringTag, { value: 'Module' }));

const maintainableCode = "The trick here is to follow best practices and coding standards such as:\n\n- Modularity.\n- Following naming conventions.\n- Adding code comments.\n- Doing regular refactors to keep technical debt under check.\n- Keeping error handling messages consistent throughout the platform.\n- Performing unit tests on all written code.";

const __vite_glob_1_33 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: maintainableCode
}, Symbol.toStringTag, { value: 'Module' }));

const messageQueue = "![Message Queue](https://assets.roadmap.sh/guest/message-queue-yw7on.png)\n\nA message queue in a distributed system can act as the core component of a reactive architecture. Each service can trigger and listen for events coming from the queue. That way, when the events arrive, those services can react to them without having to actively poll other services for a response.";

const __vite_glob_1_34 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: messageQueue
}, Symbol.toStringTag, { value: 'Module' }));

const optimisticVsPessimistic = "**Optimistic locking** is a strategy that:\n\n- Assumes conflicts are rare and don’t happen that often.\n- Allows for concurrent data access.\n- Checks if there are conflicts before committing.\n- It’s best used in high-read, low-write scenarios.\n\n**Pessimistic locking**, on the other hand, is a strategy that:\n\n- Assumes conflicts to be very common.\n- Locks data and prevents concurrent access.\n- Holds these locks for the duration of a transaction.\n- It’s best suited for high-write scenarios or when data integrity is critical.\n";

const __vite_glob_1_35 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: optimisticVsPessimistic
}, Symbol.toStringTag, { value: 'Module' }));

const protectSqlInjection = "There are many ways to protect your relational database from SQL injection attacks, but here are three very common ones.\n\n- **Prepared statements with parameterized queries.** This is probably the most effective way since it’s done by a library or framework, and all you have to do is write your queries leaving placeholders for where the data is meant to go, and then, in a separate place, provide the actual data.\n- **Use an ORM (Object-Relational Mapping).** These frameworks allow you to abstract the interaction with your database and create the SQL queries for you, taking into account all matters of security around that interaction.\n- **Escaping data.** If you want to do this manually, you can take care of escaping special characters that might break how you construct your SQL queries. Keeping a list of blacklisted characters to escape in this situation is a good idea, so you can programmatically go through them.";

const __vite_glob_1_36 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: protectSqlInjection
}, Symbol.toStringTag, { value: 'Module' }));

const rateLimiting = "To implement rate limiting, you have to keep the following points in mind:\n\n- **Define your limits.** Define exactly the amount of requests a client can make. This can be measured in requests per minute, per day, or per second.\n- **Choose a limiting strategy.** Pick a rate-limiting algorithm, like the fixed window counter, sliding log window, token bucket, or leaky bucket. You can read more about [these algorithms here](https://www.designgurus.io/answers/detail/rate-limiting-algorithms).\n- **Store your counters somewhere.** Use a fast data store (like Redis) to keep track of the number of requests or timestamps for each client.\n- Once the limit is reached, try to respond with a **standard status code**, such as 429 which indicates there have been “Too Many Requests”.\n\nIf you want to take this further, you can look into using an existing API Gateway that already provides this functionality or look into adding support for sudden bursts of traffic to avoid penalizing clients that are slightly above the limits every once in a while.";

const __vite_glob_1_37 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: rateLimiting
}, Symbol.toStringTag, { value: 'Module' }));

const realtimeDataSync = "If you want to support real-time data synchronization, you’ll have to find a way to create stable and efficient communication channels between devices and find a way to solve potential data sync conflicts when several devices are trying to change the same record.\n\nSo, for communication channels, you can use one of the following:\n\n- Socket-based bidirectional channels that allow for real-time data exchange.\n- Using a pub/sub model to efficiently distribute data between multiple devices. You can use something like Redis or Kafka for this one.\n\nFor data conflict resolutions, you can use algorithms like Operational Transformation (OT) or [Conflict-Free Replicated Data Types](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) (CRDTs).";

const __vite_glob_1_38 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: realtimeDataSync
}, Symbol.toStringTag, { value: 'Module' }));

const restCorePrinciples = "For an API to be RESTful (which means it complies with the REST guidelines), it needs to:\n\n- It needs to follow a client-server architecture (which all HTTP-based services do).\n- It has to provide a uniform interface which means:\n  - There should be a way to identify resources from each other through URIs (Unique Resource Identification).\n  - There should be a way to modify resources through their representation.\n  - Messages should be self descriptive, meaning that each message should provide enough information to understand how to process it.\n  - Clients using the API should be able to discover actions available for the current resource using the provided response from the server (this is known as HATEOAS or Hypermedia as the Engine of Application State).\n- It needs to be stateless, which means each request to the server must contain all information to process the request.\n- It should be a layered system, meaning that client and server don’t have to be connected directly to each other, there might be intermediaries, but that should not affect the communication between client and server.\n- Resources should be cacheable either by client or by server.\n- Optionally, the server could send code to the client for it to execute (known as “Code on Demand”).";

const __vite_glob_1_39 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: restCorePrinciples
}, Symbol.toStringTag, { value: 'Module' }));

const reverseProxy$1 = "A reverse proxy is a server that sits in front of multiple other servers and redirects traffic to those web servers based on different logic rules. For example, you could have two web servers, one for customers of your business and another one for your employees.\n\nYou could configure a reverse proxy to redirect traffic to one or the other depending on the value of a header sent in the request or the actual URL being requested.\n\nIt is very useful in backend development because it allows you to do many different things, for example:\n\n- Load balancing traffic between multiple instances of the same backend service.\n- Provide an extra layer of security by hiding the location of the backend services and handling attacks, such as DDoS.\n- It can cache content, reducing server load on your web servers.\n- It allows you to switch backend services without affecting the public-facing URLs.";

const __vite_glob_1_40 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: reverseProxy$1
}, Symbol.toStringTag, { value: 'Module' }));

const scaleBackend = "The most common way to scale up a backend application during traffic surges is to have multiple instances of the application behind a load balancer, and when the traffic surge happens, simply add more instances of the application.\n\nThis is known as horizontal scaling and works best when the backend application is stateless.\n\n![Scaling](https://assets.roadmap.sh/guest/scale-backend-amf0h.png)";

const __vite_glob_1_41 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: scaleBackend
}, Symbol.toStringTag, { value: 'Module' }));

const schemaMigrations = "The two main aspects to consider when managing schema migrations, especially in CD environments are:\n\n- Track your schema migrations inside version control. Keep these files versions with your code, as there is a direct relation between those versions.\n- Use automated migration tools such as [Flyway](https://flywaydb.org/) or [Liquibase](https://www.liquibase.com/) to simplify the process and keep it standard.";

const __vite_glob_1_42 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: schemaMigrations
}, Symbol.toStringTag, { value: 'Module' }));

const secureApi = "There are many ways to secure an API, here are some of the most common ones:\n\n- Add an authentication method, such as OAuth, JWT, Bearer tokens, Session-based auth, and others.\n- Use HTTPS to encrypt data transfer between client and server.\n- Configure strong CORS policies to avoid unwanted requests.\n- Setup a strong authorization logic, to ensure clients only access resources they have access to.";

const __vite_glob_1_43 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: secureApi
}, Symbol.toStringTag, { value: 'Module' }));

const secureInterservice = "Starting from the basis of understanding that your inter-service communication is meant to only happen inside private networks (ideally, no public traffic should reach these services), here are some recommendations:\n\n- Use encrypted channels, such as TLS to prevent common attacks such as [man-in-the-middle](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).\n- Use an API gateway to manage and authenticate traffic that reaches this private network.\n- Enforce authentication and authorization for inter-service messages, making sure that only valid microservices can reach each other, and when they do, they only have access to what it makes sense for them to have.\n";

const __vite_glob_1_44 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: secureInterservice
}, Symbol.toStringTag, { value: 'Module' }));

const sessionManagement = "The following is a high-level overview of how session management works for web applications:\n\n- **The session is created.** This happens with the first interaction with the system by the user (during log-in). The backend of your app will create a unique session ID that will be stored and returned to the user to use in future requests.\n- **Session information storage.** The session data needs to be stored somewhere. Whether it’s in-memory, or inside a database, it needs to be indexed by the session ID from the previous point. Here the best option is to use a database (ideally something like Redis with high I/O performance) so that the services can be scaled independently from the session data.\n- **The session ID is sent to the client.** The most common way of doing this is through cookies. The backend can set up a cookie with the session ID and the frontend can read it securely and use that ID however it needs to.\n- **Client sends the session ID.** After the ID is created, the client application will identify itself with the backend using this ID on every request.\n- **Accessing the session data in the backend.** The backend will access the stored session data using the session ID received from the client.\n- **Session is closed.** After a while, or perhaps through a user action, the session ID will be deleted, which will cause the session data to be lost (or removed from the DB). This effectively ends the interactions between the client and the server as part of the existing session.";

const __vite_glob_1_45 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sessionManagement
}, Symbol.toStringTag, { value: 'Module' }));

const sqlVsNosql = "[SQL databases](https://roadmap.sh/sql) (or relational databases as they’re also known) rely on a predefined schema (or structure) for their data. Whenever you describe a record, or table inside the database, you do so through its format (name and fields).\n\nIn [NoSQL](https://roadmap.sh/mongodb) databases, there is no schema, so there is no predefined structure to the data. You usually have collections of records that are not obligated to have the same structure, even if they represent conceptually the same thing.";

const __vite_glob_1_46 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sqlVsNosql
}, Symbol.toStringTag, { value: 'Module' }));

const sso = "At a very high level, the steps required to implement an SSO solution are:\n\n- Picking an identity provider, such as [Okta](https://www.okta.com/) or [Keycloack](https://www.keycloak.org/).\n- Each application will then integrate with the Identity provider from the previous step using a standard SSO protocol, such as SAML, OpenID or any other.\n- For the first user access, the application will connect with the IdP and authenticate the user, getting an access token in return.\n- Then during subsequent requests, the application will validate the provided token through the IdP.";

const __vite_glob_1_47 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sso
}, Symbol.toStringTag, { value: 'Module' }));

const statelessnessHttp = "HTTP is, by design, a stateless protocol, which means that every request is unique and unrelated to any previous request, even from the same client.\n\nThis affects backend web services by forcing them to implement their own state management solutions if such a feature is required.";

const __vite_glob_1_48 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: statelessnessHttp
}, Symbol.toStringTag, { value: 'Module' }));

const webhooks = "Webhooks are user-defined HTTP callbacks, they are triggered by a specific event inside a system. They’re mainly used to notify about results of multi-step, asynchronous tasks to avoid keeping an open HTTP connection.\n\nAs for the implementation of a webhook, consider the following:\n\n- **Event definition.** Make sure to define exactly what events will trigger the message to the webhook and the type of payload associated with those events.\n- **Endpoint creation.** Based on the previous step, define an HTTP endpoint that can deal with the expected request (especially with the payload part). In other words, if you’re receiving data in the webhook request, make sure to create the endpoint as a POST endpoint, otherwise you can use a GET one.\n- **Security.** Remember to implement some form of security measures around your webhook endpoint so it can’t be exploited.";

const __vite_glob_1_49 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: webhooks
}, Symbol.toStringTag, { value: 'Module' }));

const advancedDataIntegration = "An advanced data analysis project might involve integrating unprocessed data from internal CRM systems, web analytics platforms, and third-party APIs. \n\nThe process can include standardizing schemas, mapping identifiers, and applying robust profiling techniques to detect incorrect values and missing entries. \n\nWrangling tools such as Python and SQL are also used alongside validation rules to maintain consistent quality, resulting in accurate, actionable insights that support stakeholder decision-making. ";

const __vite_glob_1_50 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: advancedDataIntegration
}, Symbol.toStringTag, { value: 'Module' }));

const advancedDataWrangling = "Data wrangling involves transforming raw data into a structured format valid for analysis. The process typically begins with profiling to identify missing values, outliers, or inconsistencies, followed by data cleaning steps such as normalization, transformation, and deduplication. \n\nCommon challenges include aligning different schemas, such as mismatched column names, formats, or data types across systems. Managing time series alignment often involves reconciling data captured at different time intervals, dealing with timezone differences (which is always a pain), or interpolating missing timestamps to maintain continuity. Ensuring consistency across multiple data sources requires careful validation of business rules, consistent definitions, and strategies to resolve discrepancies in values or classifications between systems. ";

const __vite_glob_1_51 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: advancedDataWrangling
}, Symbol.toStringTag, { value: 'Module' }));

const advancedMissingData = "Techniques for handling missing information include imputation (mean, median, or model-based), deletion of incomplete records, or flagging missing fields. \n\nEach method impacts profiling and validation differently: imputation can preserve dataset size but may introduce bias (depending on how much data is missing), while deletion may improve quality at the cost of reducing sample size. \n\nLike with everything in this field, there is no single best solution to all problems, instead, consider that the best approach depends on your context. ";

const __vite_glob_1_52 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: advancedMissingData
}, Symbol.toStringTag, { value: 'Module' }));

const advancedMultivariate = "Multivariate analysis is used to explore complex relationships among multiple variables. \n\nThe first thing to do would be to clean and standardize the dataset, then use statistical methods such as MANOVA, or factor analysis to understand how different variables influence outcomes together in a data analysis project. ";

const __vite_glob_1_53 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: advancedMultivariate
}, Symbol.toStringTag, { value: 'Module' }));

const advancedProfiling = "Advanced profiling methods include statistical summaries (e.g., mean, standard deviation), z-score or IQR-based outlier detection, and fuzzy matching for duplicates. \n\nFor continuous probability distributions, verifying normality ensures that imputation and anomaly detection methods are applied appropriately, maintaining data quality and analytical accuracy. ";

const __vite_glob_1_54 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: advancedProfiling
}, Symbol.toStringTag, { value: 'Module' }));

const analysisTypes = "Univariate analysis involves examining a single variable to understand its distribution, central tendency, or spread. \n\nBivariate analysis, then, involves exploring the relationship between two variables, such as using scatter plots or correlation analysis. \n\nFinally, multivariate analysis expands this further to three or more variables, allowing analysts to investigate how several variables interact and influence each other. ";

const __vite_glob_1_55 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: analysisTypes
}, Symbol.toStringTag, { value: 'Module' }));

const analyticsTypes = "Descriptive analytics focuses on summarizing past events using historical data. \n\nPredictive analytics uses statistical models and machine learning to forecast future outcomes.\n\nPrescriptive analytics builds on predictions by suggesting actions that optimize outcomes. \n\nEach type serves a different and unique purpose within the broader scope of data analytics. ";

const __vite_glob_1_56 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: analyticsTypes
}, Symbol.toStringTag, { value: 'Module' }));

const clusteringAnalysis = "Clustering or cluster analysis is used to group similar data points based on selected features. \n\nTo perform clustering, a data analyst might normalize the data, select an algorithm such as K-means or hierarchical clustering, and determine the optimal number of clusters using techniques like the elbow method. \n\nWhile analysts can't really predict the exact insights they'll get out of this practice, chances are, they'll likely have their own theories. The resulting clusters, of course, will be the ones that reveal hidden patterns, such as customer segments or regional sales performance groups, leading to valuable insights. ";

const __vite_glob_1_57 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: clusteringAnalysis
}, Symbol.toStringTag, { value: 'Module' }));

const combinedAnalysis = "Univariate analysis looks at one variable at a time (like checking how a group of people's ages are distributed) to understand overall patterns such as average or range. \n\nBivariate analysis involves comparing two variables (such as age and income) to see if there's a relationship between them. \n\nUsed together, these methods help identify trends in the data and provide a foundation for asking deeper questions or making predictions. \n\nFor example, with the first one analysts might show that customers aged 30 to 40 are the most common in a dataset, while with the second analysis they could reveal that this same age group also tends to spend the most per purchase—leading to valuable marketing or sales insights. ";

const __vite_glob_1_58 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: combinedAnalysis
}, Symbol.toStringTag, { value: 'Module' }));

const dataAggregation = "Data aggregation is the process of summarizing detailed data by grouping and computing metrics like sum, count, average, or maximum. \n\nIt is a very useful technique that helps data analysts gain high-level insights, spot trends, and support decision-making, especially useful in dashboard creation and KPI reporting. ";

const __vite_glob_1_59 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataAggregation
}, Symbol.toStringTag, { value: 'Module' }));

const dataAnalysisProcess = "It's usually a good idea to follow a five-step process when working with raw data:\n\n1. **Understand the problem**: Begin by clearly defining the problem to solve, identifying the business objective, and determining what kind of insight is required to obtain (this is the end goal after all).  \n2. **Collect the data**: Once the objective is clear, gather the data. This data can come from databases, APIs, spreadsheets, or even third-party sources.  \n3. **Clean and organize the data**: We'll want to clean the data by removing duplicates, handling absent values, and standardizing formats.  \n4. **Explore the data through visualizations**: With the clean data, start playing around with different visualizations to explore trends, distributions, and relationships.   \n5. **Draw conclusions based on findings**: Finally, analyze the data in the context of the original problem and use the results to draw insights. ";

const __vite_glob_1_60 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataAnalysisProcess
}, Symbol.toStringTag, { value: 'Module' }));

const dataAnalystRole = "A data analyst collects, processes, and interprets data to help businesses make informed decisions. \n\nData analysis is the process of examining datasets, while on the other hand, data analytics is a broader field that includes the tools and methods used for analysis, prediction, and automation. ";

const __vite_glob_1_61 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataAnalystRole
}, Symbol.toStringTag, { value: 'Module' }));

const dataChallenges = "Anything can happen when dealing with data, however if we're considering the most common challenges, we could include missing or inconsistent data, varying formats, lack of clear documentation, and large file sizes that strain computing resources. \n\nTo overcome these, analysts use a combination of thorough profiling, robust ETL (extract, transform, load) pipelines, modular cleaning scripts, and collaboration with data engineers or domain experts. ";

const __vite_glob_1_62 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataChallenges
}, Symbol.toStringTag, { value: 'Module' }));

const dataCleaning = "Cleaning data and handling the lack of some values typically involves several steps:\n\n1. **Identify missing or inconsistent data**: We first have to scan the dataset for null values, anomalies, or formatting issues that could be caused by errors.  \n2. **Assess the impact of missing values**: We then evaluate how much data is missing and determine how critical those fields are to the analysis.   \n3. **Select a handling strategy**: Next, we choose whether to fill in missing data (imputation), exclude affected rows, or flag incomplete records. It all depends on the business context, of course.  \n4. **Impute or remove values**: If you're going to impute data, use methods such as mean, median, or mode imputation, to calculate the missing values in a way that makes sense to the context of the data. Otherwise, just remove records with excessive gaps if necessary.  \n5. **Verify the cleaned dataset**: Run data validation checks to ensure that the cleaning process preserved data integrity and did not introduce bias. ";

const __vite_glob_1_63 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataCleaning
}, Symbol.toStringTag, { value: 'Module' }));

const dataFormats = "The key to dealing with data in multiple formats like CSV, JSON, Excel, or SQL databases is to standardize schemas and ensure consistent data types. Also known as data harmonization.\n\nData analysts focus on structure compatibility, efficient data storage, and transforming unprocessed data into tidy, analyzable formats.\n\nConsiderations include handling data without a pre-defined structure, such as free-text fields or social media content, which often requires natural language processing techniques to structure meaningfully. Nested structures—like JSON objects within rows—must be flattened or parsed appropriately for tabular analysis. \n\nEncoding issues, such as character mismatches or inconsistent formatting (e.g., UTF-8 vs. ASCII), can lead to incorrect values or loading errors, so ensuring standardized encoding across all sources is crucial. ";

const __vite_glob_1_64 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataFormats
}, Symbol.toStringTag, { value: 'Module' }));

const dataIntegrityStrategies = "Ensuring data integrity involves implementing validation rules, conducting regular audits, and applying version control for datasets. \n\nAnomaly detection and continuous profiling help identify incorrect data values early, while clear governance policies help ensure consistency and accountability across teams in the long run. ";

const __vite_glob_1_65 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataIntegrityStrategies
}, Symbol.toStringTag, { value: 'Module' }));

const dataMining = "Data mining is the practice of analyzing large datasets to discover hidden patterns, relationships, or insights using methods from statistics, machine learning, and database systems. \n\nWhile data mining might sound a lot like Exploratory Analysis (or EDA) because they both involve exploring data, they differ in scope and depth. EDA focuses on summarizing and visualizing the dataset to understand its structure and quality, typically as a precursor to modeling. \n\nData mining, on the other hand, involves applying more advanced, often automated techniques to uncover non-obvious patterns, often with the goal of prediction or segmentation. ";

const __vite_glob_1_66 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataMining
}, Symbol.toStringTag, { value: 'Module' }));

const dataModelingExperience = "Data modeling involves designing schemas (such as relational or star schemas) that align with business requirements. Key practices include normalization for data consistency, indexing for performance, and using columnar storage for scalability. \n\nDocumentation and adherence to data structure standards support efficient access and long-term maintainability. ";

const __vite_glob_1_67 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataModelingExperience
}, Symbol.toStringTag, { value: 'Module' }));

const dataModeling = "It helps define how data is structured and related, laying the foundation for efficient querying and data analytics. Usually data analysts perform the modeling ahead of time, giving them direction, something to work towards when they start with the wrangling phase.\n\nData management, on the other hand, ensures data integrity, accessibility, and security throughout its lifecycle. Together, they enable scalable, accurate, and consistent data analysis, supporting better decision-making and long-term analytical success. ";

const __vite_glob_1_68 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataModeling
}, Symbol.toStringTag, { value: 'Module' }));

const dataProfiling = "Profiling is the process of examining the data available in an existing dataset and collecting statistics and summaries about that data. While it might be confused with EDA, profiling can instead be considered as the first step of EDA, helping to identify quality issues such as null values, duplicate records, outliers, and unexpected formats. Thus allowing analysts to correct or address these problems before they start looking for patterns and outliers as part of the exploratory analysis. ";

const __vite_glob_1_69 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataProfiling
}, Symbol.toStringTag, { value: 'Module' }));

const dataQuality = "Ensuring quality involves validating the accuracy, completeness, consistency, and reliability of the data collected from each source. The fact that you do it from one source or multiple is almost irrelevant since the only extra task would be to homogenize the final schema of the data, ensuring deduplication and normalization. \n\nThis last part typically includes verifying the credibility of each data source, standardizing formats (like date/time or currency), performing schema alignment, and running profiling to detect anomalies, duplicates, or mismatches before integrating the data for analysis. ";

const __vite_glob_1_70 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataQuality
}, Symbol.toStringTag, { value: 'Module' }));

const dataStorageApproaches = "Common approaches include using ETL pipelines and integration tools to convert and unify data in formats like CSV, JSON, and XML. Through these tools, data engineers can load and transform the data, saving it in a common format for later use.\n\nChallenges related to data storage are addressed by optimizing internal structures (e.g., using Parquet for large volumes), applying indexing strategies, and storing data in scalable environments such as cloud warehouses. ";

const __vite_glob_1_71 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataStorageApproaches
}, Symbol.toStringTag, { value: 'Module' }));

const dataTransformationProcess = "Working with data transformations requires several different steps:\n\n1. You can start the process by collecting data from diverse sources such as APIs, flat files, or databases, depending on the needs of the project.  \n2. Once collected, profiling of the data needs to happen to evaluate the structure, completeness, consistency, and accuracy of the dataset. This is important because the type of actions that you can take next on this data, will depend on its profile.  \n3. Then comes the data cleaning phase, where missing values are addressed, duplicate records are removed, and formats are standardized to ensure uniformity across variables.   \n4. Finally, wrangling techniques are used to reshape, merge, or transform the cleaned data into formats that align with the requirements of downstream models, dashboards, or machine learning pipelines. ";

const __vite_glob_1_72 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataTransformationProcess
}, Symbol.toStringTag, { value: 'Module' }));

const dataTypes = "These two types of data are quite different, on the one hand you have numerical data that represents measurable quantities and includes continuous data (like height, weight, income) and discrete data (like number of children). \n\nOn the other hand, you have the data that represents labels or categories such as product types, departments, or user segments, and may be nominal (unordered) or ordinal (ordered). ";

const __vite_glob_1_73 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataTypes
}, Symbol.toStringTag, { value: 'Module' }));

const dataValidation = "Data analysis directly depends on the accuracy of the data being analyzed. And while it doesn't have to have high accuracy when it's initially ingested, it needs to be improved until a minimum standard is reached. \n\nAnd because of this, data validation is critical in ensuring that the inputs to an analysis are accurate, consistent, and within expected ranges. \n\nWithout validation, there's a risk of basing insights and decisions on flawed/biased data. Validation includes applying rules, such as checking for duplicates, range checks, and data type verification, to catch errors early. ";

const __vite_glob_1_74 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataValidation
}, Symbol.toStringTag, { value: 'Module' }));

const dataVisualization = "Data visualization plays a vital role in making data accessible and understandable by turning raw numbers into visual formats that reveal trends, correlations, and outliers. After all, it helps analysts explore data by summarizing endless rows of values into simple representations that can communicate findings effectively to non-technical stakeholders. \n\nCommon tools for this purpose include Excel or Google Spreadsheets for quick visuals, Tableau and Power BI for interactive dashboards, and Python libraries like Matplotlib and Seaborn for custom plots. ";

const __vite_glob_1_75 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataVisualization
}, Symbol.toStringTag, { value: 'Module' }));

const dataWrangling = "It is the process of cleaning, structuring, and enriching data into a desired format so that it can be analyzed further down the pipeline. \n\nIt is especially useful with data that lacks structure, such as text files, emails, or social media posts, because these formats need to be parsed, standardized, and transformed before they can be analyzed. ";

const __vite_glob_1_76 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataWrangling
}, Symbol.toStringTag, { value: 'Module' }));

const descriptiveAnalysis = "Descriptive analysis summarizes historical data to identify trends, measure performance, and understand customer behavior. \n\nFor a data analyst, it is often the first step in analyzing marketing data, revealing key performance indicators, average value trends, and segment behavior. This output usually helps steer further exploratory analysis or predictive modeling efforts. ";

const __vite_glob_1_77 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: descriptiveAnalysis
}, Symbol.toStringTag, { value: 'Module' }));

const duplicateData = "Duplicate data can skew results and lead to incorrect conclusions, reason why data analysts try to avoid it as the plague.\n\nTypically, analysts detect duplicates using key fields (when available) or fuzzy matching (which allows for partial matches to be identified as exact ones), then handle them by either merging records, keeping the most recent entry, or removing the redundant rows, depending on the context and business rules. ";

const __vite_glob_1_78 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: duplicateData
}, Symbol.toStringTag, { value: 'Module' }));

const excelTools = "Excel is probably one of the most versatile tools for quick data exploration, initial data cleaning, pivoting, and aggregating data points, as long as the volume of data is manageable by the program. \n\nIt is often used in combination with SQL for querying structured data, and Python or R for more advanced analysis options. \n\nYou can think of Excel as a flexible interface for rapid prototyping before scaling workflows. ";

const __vite_glob_1_79 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: excelTools
}, Symbol.toStringTag, { value: 'Module' }));

const excelUsage = "Excel is quite a versatile tool used by almost everyone in the data industry. While it might not be the best choice for all use cases, it's frequently used for tasks such as data entry, quick data cleansing, creating pivot tables, performing basic analysis, and building initial visualizations. \n\nGiven its ease of use and how powerful it is, it often serves as a useful platform for prototyping before scaling up to more complex tools like SQL or Python. ";

const __vite_glob_1_80 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: excelUsage
}, Symbol.toStringTag, { value: 'Module' }));

const exploratoryDataAnalysis = "EDA is a critical initial step in any data project, often using visual methods to understand the data. \n\nIt helps data analysts identify patterns, spot anomalies, test assumptions, and understand the structure and distribution of data. The output of your EDA will act as the input for the selection of appropriate models and methods for deeper analysis, ultimately reducing the risk of inaccuracy in the final results. ";

const __vite_glob_1_81 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: exploratoryDataAnalysis
}, Symbol.toStringTag, { value: 'Module' }));

const hypothesisTesting = "Hypothesis testing starts with defining the null and alternative hypotheses, selecting the appropriate test and significance level, and calculating the test statistic and p-value. \n\nData analysts ensure validity by checking assumptions, using adequate sample sizes, and applying corrections for multiple tests when necessary. ";

const __vite_glob_1_82 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: hypothesisTesting
}, Symbol.toStringTag, { value: 'Module' }));

const largeDatasetModification = "Modifying large datasets can lead to inconsistencies or data integrity issues. Best practices include performing updates in batch processes, using audit trails, applying automated validation scripts, and staging changes in test environments before deploying to production systems to ensure standards are met. ";

const __vite_glob_1_83 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: largeDatasetModification
}, Symbol.toStringTag, { value: 'Module' }));

const missingData = "Data analysts are always trying to handle holes in their data in one way or another, because it directly affects their job and results.\n\nThere are several ways to handle missing data, one way is by using imputation techniques (e.g., mean, median, predictive models), removing incomplete rows, or even flagging affected data points. The chosen method depends on the data set and business context, with proper validation to ensure analytical integrity. ";

const __vite_glob_1_84 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: missingData
}, Symbol.toStringTag, { value: 'Module' }));

const mixedDataRegression = "A typical scenario involves combining numerical inputs like purchase amounts with categorical variables like region to predict customer lifetime value. \n\nChallenges include encoding categorical variables (e.g., one-hot encoding) and avoiding multicollinearity. Ensuring the validity of regression assumptions is also critical to achieving reliable outcomes. ";

const __vite_glob_1_85 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: mixedDataRegression
}, Symbol.toStringTag, { value: 'Module' }));

const pcaAnalysis = "Principal Component Analysis (PCA) is a dimensionality reduction technique used in data analytics to simplify large data sets by transforming correlated variables into a smaller number of uncorrelated components. \n\nIn simpler terms, imagine having a spreadsheet with dozens of similar columns about customers' habits. In this case, PCA helps condense that data into a few powerful new columns that still capture most of the important patterns, making the data easier to analyze without losing much meaning.\n\nData analysts often use PCA in scenarios where datasets have many features, such as customer behavior tracking, to reduce noise and improve the performance of clustering or classification algorithms. ";

const __vite_glob_1_86 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: pcaAnalysis
}, Symbol.toStringTag, { value: 'Module' }));

const pcaScenario = "To prepare for a data analyst interview, reviewing a project that involved principal component analysis (PCA) is recommended. \n\nFor instance, applying PCA to a customer transaction dataset with dozens of behavioral variables helps reduce dimensionality and improve model performance by minimizing multicollinearity and noise, that way you get to showcase your own understanding of dimensionality reduction techniques. ";

const __vite_glob_1_87 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: pcaScenario
}, Symbol.toStringTag, { value: 'Module' }));

const probabilityDistributions$1 = "Continuous probability distributions, such as the normal distribution, are foundational in this type of analysis. They allow data analysts to model real-world phenomena, estimate probabilities, and apply statistical tests. \n\nThe normal distribution, in particular, underpins many statistical models and techniques due to its well-known properties and prevalence in natural datasets.\n\nFor example, if you measured the heights of a large group of adults, you'd likely see that most people cluster around an average height, with fewer people being very short or very tall, the resulting curve, known as bell curve, is a classic example of a data distribution known as \"normal\"..\n\nUnderstanding this helps data analysts apply the right statistical techniques when analyzing data like test scores, product ratings, or sales figures. ";

const __vite_glob_1_88 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: probabilityDistributions$1
}, Symbol.toStringTag, { value: 'Module' }));

const profilingMethods = "Data profiling involves assessing the structure, content, and quality of a dataset. In other words, getting a quick picture of what the data looks like without going through the entire data set.\n\nThe most common methods include checking for missing values, detecting incorrect values, reviewing data types and ranges, and identifying duplicate data. \n\nAutomated profiling tools and custom scripts help data analysts uncover issues before performing deeper analysis. ";

const __vite_glob_1_89 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: profilingMethods
}, Symbol.toStringTag, { value: 'Module' }));

const recordModification = "For example, you could think of modifying existing records by standardizing customer names and correcting inconsistent formats in a CRM system. \n\nAfter profiling and identifying the quality issues, analysts can apply transformation rules, validate entries, and ensure the updated records adhere to the existing standards to avoid errors in future analyses. ";

const __vite_glob_1_90 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: recordModification
}, Symbol.toStringTag, { value: 'Module' }));

const regressionAnalysis = "A data analyst might apply linear regression to model the relationship between advertising spend and sales data over time. By identifying the line of best fit, analysts can forecast future sales and support data-driven decision-making about how much money to use in advertising. \n\nMore advanced scenarios may include techniques such as multivariate regression when multiple variables are influencing the outcome. ";

const __vite_glob_1_91 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: regressionAnalysis
}, Symbol.toStringTag, { value: 'Module' }));

const regressionComparison = "On one side, the first one is used when predicting a continuous outcome, such as revenue, and on the other side logistic regression is better for categorical or binary outcomes, such as churn (yes/no). This type of regression applies a sigmoid function to output probabilities, making it great for classification tasks. ";

const __vite_glob_1_92 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: regressionComparison
}, Symbol.toStringTag, { value: 'Module' }));

const salesClustering = "Cluster analysis groups similar data points based on features such as purchase behavior, frequency, or location. \n\nApplied to sales data, this technique can reveal buyer segments, regional trends, or product preferences. These insights help refine marketing campaigns, improve customer retention, and even inform pricing strategies. ";

const __vite_glob_1_93 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: salesClustering
}, Symbol.toStringTag, { value: 'Module' }));

const statisticalHypothesis = "Hypothesis testing in data mining is a method used to check whether assumptions about a dataset are likely to be true. \n\nIt involves starting with two statements: a null hypothesis (usually representing no effect or change) and an alternative hypothesis (representing the effect or change being tested). \n\nStatistical tests like t-tests or ANOVA are then applied to compare groups or variables. The results are measured using p-values and confidence intervals, which help determine if the findings are statistically meaningful. ";

const __vite_glob_1_94 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: statisticalHypothesis
}, Symbol.toStringTag, { value: 'Module' }));

const statisticalModels = "There are dozens of commonly used statistical models, and data analysts use several of them with other techniques depending on the analysis objective. \n\nCommon methods include linear and logistic regression, hypothesis testing (t-tests, chi-square tests), ANOVA, time series analysis, and Bayesian inference. These tools help analyze data, identify trends, and validate assumptions during the data analysis process. ";

const __vite_glob_1_95 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: statisticalModels
}, Symbol.toStringTag, { value: 'Module' }));

const statsVizIntegration = "This type of analysis is used to identify key metrics, trends, or correlations in the data. \n\nData visualization tools like Tableau, Power BI, or Python's Seaborn are then used to display those insights in a clear, accessible format. This integration helps stakeholders make informed decisions by connecting statistical findings to real-world implications. ";

const __vite_glob_1_96 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: statsVizIntegration
}, Symbol.toStringTag, { value: 'Module' }));

const unstructuredDataAggregation = "When working with data that is not structured such as customer reviews, social media comments, or even video feed data, the key is to turn it into structured data. The way to do that depends on the source and type of the data, for instance, text information (such as reviews, or social media comments) can be processed with natural language processing (NLP) techniques to extract structured elements like sentiment or keyword frequency. \n\nAfter that, data aggregation techniques, such as calculating average sentiment by product or keyword frequency counts, can then be used to uncover trends and support marketing and product strategies. \n\nIn other words, turn the chaos of data into a structured format, and then derive insight by aggregating it. ";

const __vite_glob_1_97 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: unstructuredDataAggregation
}, Symbol.toStringTag, { value: 'Module' }));

const visualizationDecisions = "Data visualization transforms complex data sets into intuitive visuals that highlight trends, outliers, and relationships. Tools like Tableau, Power BI, and Microsoft Excel enable data analysts to build dashboards and reports that help stakeholders make informed decisions. \n\nEffective visualizations improve communication and accelerate decision-making based on real-time data insights. \n\nIn simpler terms, good charts and dashboards help people quickly understand what's going on in the business. What's working, what's not, and where they should focus next, without needing to dig through rows of data themselves. ";

const __vite_glob_1_98 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: visualizationDecisions
}, Symbol.toStringTag, { value: 'Module' }));

const visualizationEda = "Exploratory analysis can be performed using tools like Tableau, Power BI, or Python libraries such as Matplotlib and Seaborn. \n\nTechniques include plotting distributions, detecting outliers, and identifying trends using visual summaries. These visualizations help analysts and stakeholders better understand underlying patterns. ";

const __vite_glob_1_99 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: visualizationEda
}, Symbol.toStringTag, { value: 'Module' }));

const accuracyFromConfusionMatrix = "```python\naccuracy = (TP + TN) / (TP + TN + FP + FN)\nprecision = TP / (TP + FP)  # How many selected items are relevant\nrecall = TP / (TP + FN)     # How many relevant items are selected\nf1_score = 2 * (precision * recall) / (precision + recall)  # Harmonic mean\n\n# For imbalanced datasets, consider:\nspecificity = TN / (TN + FP)\nbalanced_accuracy = (recall + specificity) / 2\n``` ";

const __vite_glob_1_100 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: accuracyFromConfusionMatrix
}, Symbol.toStringTag, { value: 'Module' }));

const applyVsMapPandas = "- .map(): Works only on Series, applies a function element-wise\n- .apply(): More versatile, works on both Series and DataFrames\n- .applymap(): Applies a function to every element in a DataFrame\n\n```python\n# map - simple transformation of Series values\ndf['category'] = df['category_id'].map({1: 'Electronics', 2: 'Clothing'})\n\n# apply on Series - more complex operations\ndf['name'] = df['name'].apply(lambda x: x.title())\n\n# apply on DataFrame - process entire rows or columns\ndf.apply(lambda x: x.max() - x.min())\n\n# applymap - element-wise operation on entire DataFrame\ndf.applymap(lambda x: f\"{x:.2f}\" if isinstance(x, float) else x)\n``` ";

const __vite_glob_1_101 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: applyVsMapPandas
}, Symbol.toStringTag, { value: 'Module' }));

const baggingVsBoosting = "Ensemble techniques in machine learning combine multiple weak models into a strong, more accurate predictive model, using the collective intelligence of diverse models to improve performance. Bagging and boosting are different ensemble techniques that use multiple models to reduce error and optimize the model.\n\n![Bagging vs. boosting](https://assets.roadmap.sh/guest/difference-between-bagging-and-boosting-4j47l.png)\n\nThe bagging technique uses multiple models trained on different subsets of data. It decreases the variance and helps to avoid overfitting. It is usually applied to decision tree methods and is a special case of the model averaging approach. Boosting is an ensemble modeling technique designed to create a strong classifier by combining multiple weak classifiers. The process involves building models sequentially, where each new model aims to correct the errors made by the previous ones.\n\n- **Bagging:** Builds multiple models in parallel using bootstrapped datasets to reduce variance (e.g., Random Forest).\n- **Boosting:** Builds models sequentially, each trying to correct errors from the previous, reducing bias (e.g., XGBoost). ";

const __vite_glob_1_102 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: baggingVsBoosting
}, Symbol.toStringTag, { value: 'Module' }));

const batchVsOnlineLearning = "Batch learning is a term in artificial intelligence that refers to the process of training a machine learning model on a large set of data all at once, instead of continuously updating the model as new data comes in. This method allows for greater consistency and efficiency in the training process, as the model can learn from a fixed set of data before being deployed for use.\n\nIn batch learning, the model sees the entire dataset multiple times (known as epochs), refining its understanding with each pass. By processing data in large chunks, it converges more slowly but generally achieves higher accuracy.\n\nOnline learning takes a continuous, incremental approach. Instead of waiting for all the data to be available, you feed it to the model bit by bit, just like learning something new every day instead of cramming for a final exam. The model updates with each new data point, so it's constantly learning and evolving.\n\nFor example, imagine you're monitoring customer behavior on a website. Every time a user clicks or makes a purchase, your model gets smarter, learning from that single interaction and refining its predictions for the next. ";

const __vite_glob_1_103 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: batchVsOnlineLearning
}, Symbol.toStringTag, { value: 'Module' }));

const biasVarianceTradeoff = "The bias-variance tradeoff refers to the balance between a model's ability to learn patterns (low bias) and its ability to generalize to new data (low variance). Bias is the error made when the model makes strong assumptions about the data: high bias could lead to underfitting. Variance is the model's sensitivity to small fluctuations in the data, and high variance could lead to overfitting.\n\n![Bias-variance tradeoff](https://assets.roadmap.sh/guest/bias-variance-tradeoff-jc0mj.png) ";

const __vite_glob_1_104 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: biasVarianceTradeoff
}, Symbol.toStringTag, { value: 'Module' }));

const categoricalVsContinuousVariables = "A categorical variable is a column with fixed options based on qualities or labels like gender, age group, or education level. You can't do math on them directly, so during preprocessing, I usually apply one-hot encoding to turn those categories into binary columns the model can understand.\n\n![Categorical vs. continuous variables](https://assets.roadmap.sh/guest/categorical-variable-vs-continuous-variable-m1qz5.png)\n\nA continuous variable, on the other hand, can take on any value within a range like height, temperature, or speed. These are numeric, so you can run calculations on them. But before feeding them into a model, I scale them using normalization or standardization to keep all features on a similar range. This prevents one feature from overpowering the rest just because it has larger numbers.";

const __vite_glob_1_105 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: categoricalVsContinuousVariables
}, Symbol.toStringTag, { value: 'Module' }));

const centralLimitTheorem = "The Central Limit Theorem (CLT) states that if you take enough random samples from any dataset, even if the data is skewed or messy, the average of those samples will start to form a bell-shaped or normal distribution. This only holds if the samples are random, independent, and large enough, usually 30 or more.\n\nWhy does this matter? Because once those averages form a normal shape, you can use all the tools from the normal distribution. You can calculate standard errors, build confidence intervals, run hypothesis tests, make estimates, and use z-scores, even if the original data wasn’t normal to begin with.";

const __vite_glob_1_106 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: centralLimitTheorem
}, Symbol.toStringTag, { value: 'Module' }));

const combiningDataFromMultipleSources = "When I combine data from different sources with inconsistent formats, the first thing I do is standardize everything: dates, column names, booleans, numbers, etc., so they all speak the same language. After doing that, I'll:\n\n- **Align schemas:** match columns across datasets. If one has extras, I drop or keep them depending on relevance.\n- **Unify categories:** I clean up inconsistencies like \"Y\" vs. \"Yes\" to avoid downstream issues.\n- **Tag the source:** I add a source column so I know where each row came from. This is super useful for tracking or debugging later.\n- **Merge or stack:** If the structure is the same, I **concat()**. If I'm matching on something like customer ID, I go with a merge or join.\n- **Final clean-up:** I look for duplicates, mismatched types, or broken values post-merge and fix them.\n\nI avoid merging before checking data types or keys. That’s a fast track to lost or duplicated rows.";

const __vite_glob_1_107 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: combiningDataFromMultipleSources
}, Symbol.toStringTag, { value: 'Module' }));

const confidenceIntervals = "A confidence interval is a range of values that's likely to have the true value of a population parameter based on sample data. Let's say you surveyed a sample of high school teachers and found their average salary was $75,000. Since that's just a sample, you can't say for sure it reflects all teachers, but we can say:\n\n*\"We're 95% confident that the real average salary for all teachers falls between $72,000 and $78,000.\"*\n\nThe confidence interval is between $72,000 and $78,000. It gives us a buffer to account for uncertainty in our estimate.\n\n![Confidence intervals for teachers salaries](https://assets.roadmap.sh/guest/confidence-interval-for-teacher-salaries-mee1i.png)";

const __vite_glob_1_108 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: confidenceIntervals
}, Symbol.toStringTag, { value: 'Module' }));

const confusionMatrix = "A confusion matrix is a simple table that shows how well a classification model is performing by comparing its predictions to the actual results. It breaks down the predictions into four categories: correct predictions for both classes (true positives and true negatives) and incorrect predictions (false positives and false negatives). This helps you understand where the model is making mistakes so you can improve it.\n\n- **TP:** True Positives\n- **TN:** True Negatives\n- **FP:** False Positives\n- **FN:** False Negatives\n\n![Confusion matrix](https://assets.roadmap.sh/guest/actual-values-qnezf.png)\n\n**Example:** From the matrix below, there are 165 total cases:\n\n- **True Negatives:** **50**\n- **False Positives:** **10**\n- **False Negatives:** **5**\n- **True Positives:** **100**\n\nDepending on the project you're working on, you can use metrics such as Accuracy, Precision, Recall, and F1 Score to evaluate your project. A confusion matrix is a visualization of it.\n\n![An example of confusion matrix](https://assets.roadmap.sh/guest/sample-confusion-matrix-l4q8i.png)\n\n**Common pitfall:** Misreading the matrix layout or assuming it works for multi-class without modification. ";

const __vite_glob_1_109 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: confusionMatrix
}, Symbol.toStringTag, { value: 'Module' }));

const correlationVsCausation = "Correlation is the statistical measure that shows a relationship between two variables. When one changes, the other changes as well, positively or negatively. However, this doesn't mean that one variable causes the other to change. Causation means that one variable directly causes a change in the other. It implies a cause-and-effect relationship, not just an association. Proving causation requires deeper analysis and additional evidence.\n\n**Example:** There's a correlation between cart abandonment and uninstall rates in a shopping app. Users who abandon their carts often end up uninstalling the app shortly after. But that doesn't mean abandoning a cart causes someone to uninstall the app. The real cause might be a frustrating purchase process with too many steps. That complexity leads to both behaviors: abandoning the cart and uninstalling the app. So, while there's a correlation, you can't say it's causation without looking deeper.\n\n![Correlation vs. causation](https://assets.roadmap.sh/guest/difference-between-correlation-and-causation-j92us.png) ";

const __vite_glob_1_110 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: correlationVsCausation
}, Symbol.toStringTag, { value: 'Module' }));

const crossValidation = "Cross-validation is a technique for evaluating a model's performance on an individual dataset. It divides the dataset into subsets, usually the training, test, and validation sets. This process is repeated multiple times to ensure the model generalizes well to unseen data and to stop overfitting.\n\n![Cross-validating data](https://assets.roadmap.sh/guest/cross-validationing-data-uha2b.png) ";

const __vite_glob_1_111 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: crossValidation
}, Symbol.toStringTag, { value: 'Module' }));

const decisionTrees = "A decision tree is a machine learning algorithm used for classification and regression tasks. It makes decisions by following a tree-like structure where internal nodes represent attribute tests, branches represent attribute values, and leaf nodes represent predictions.\n\n![Decision tree](https://assets.roadmap.sh/guest/decision-tree-y4hrk.png)\n\nDecision trees are versatile and are used for many machine learning tasks.\n\n**Example**: Loan approval decision tree\n\n- **Step 1 – Ask a question (Root Node)**: Is the applicant's credit score > 700?\n  - If yes, go to Internal Node.\n  - If no, go to Leaf Node (Do not approve the loan).\n- **Step 2 – More questions (Internal Nodes)**: Is the applicant's income > $50,000?\n  - If yes, approve the loan (Leaf Node).\n  - If no, go to Leaf Node (Do not approve the loan).\n- **Step 3 - Decision (Leaf Node)**\n  - Leaf Node 1: Do not approve the loan (if credit score ≤ 700).\n  - Leaf Node 2: Approve the loan (if credit score > 700 and income > $50,000).\n  - Leaf Node 3: Do not approve the loan (if credit score > 700 and income ≤ $50,000).\n\n**Common pitfall:** Trees tend to overfit the data if you allow it to go too deep and include too many branches. ";

const __vite_glob_1_112 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: decisionTrees
}, Symbol.toStringTag, { value: 'Module' }));

const deepLearningVsTraditionalMl = "**Deep learning** uses multi-layered neural networks to handle complex tasks like image recognition, NLP, and recommendation systems. Think CNNs, RNNs, and Transformers.\n\n**Pros:**\n\n- Handles complex, high-dimensional data (images, audio, text)\n- Works with both structured and unstructured data\n- Learns non-linear relationships\n- Scales well across use cases with techniques like transfer learning\n- Great at generalizing from large datasets\n\n**Cons:**\n\n- Requires lots of data and compute\n- Heavily dependent on data quality\n- Hard to interpret (black box)\n- Comes with privacy and security concerns\n\nTraditional ML uses simpler, more interpretable algorithms like decision trees, logistic regression, and support vector machines.\n\n**Pros:**\n\n- Works well with smaller datasets\n- Faster to train and more straightforward to interpret\n- Lower computational cost\n- More transparent and explainable\n\n**Cons:**\n\n- Struggles with complex/non-linear data\n- Needs manual feature engineering\n- Doesn't scale well with large datasets\n- Can overfit if not tuned properly ";

const __vite_glob_1_113 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: deepLearningVsTraditionalMl
}, Symbol.toStringTag, { value: 'Module' }));

const detectConceptDrift = "Concept drift happens when the relationship between your input features and target variable changes over time, causing your model's performance to drop. It's common in dynamic environments (e.g., user behavior, market trends). COVID-19 is a real-world example: models trained pre-pandemic broke down because behavior and data patterns shifted.\n\n**How to detect it:**\n\n- **Set up reference vs. detection windows:** Compare a stable past dataset (e.g., January traffic) against a current window (e.g., this week). This gives you a baseline.\n- **Compare distributions:** Use statistical tests (e.g., Kolmogorov–Smirnov, PSI, KL divergence) to detect shifts in data or feature distributions.\n- **Track model performance over time:** Drop in precision, recall, or overall accuracy compared to your baseline = red flag.\n- **Run significance tests:** This tells you if the drift is real or just noise. ";

const __vite_glob_1_114 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: detectConceptDrift
}, Symbol.toStringTag, { value: 'Module' }));

const ensureFairnessRemoveBias = "Fairness means your model makes decisions that don't unfairly favor or penalize any group. Bias can sneak in at any stage, like data collection, labeling, training, and even deployment, so it needs to be addressed early and often.\n\n**How to ensure fairness:**\n\n- **Start with diverse training data:** Your data should reflect all the groups your model impacts. If it's skewed, the model will be too.\n- **Preprocess to balance representation:** Use techniques like oversampling underrepresented groups or reweighting the data.\n- **Use bias detection tools:** Libraries like Fairlearn, AIF360, and What-If Tool can help you spot performance gaps across subgroups.\n- **Apply fairness constraints during training:** Use regularization, adversarial debiasing, or post-processing adjustments to reduce harm to specific groups.\n- **Build transparency into the model:** Use interpretable models (e.g., decision trees, linear models) or explanation tools like SHAP and LIME.\n- **Audit regularly across subgroups:** Don't rely only on overall accuracy—look at performance across gender, race, age, etc.\n- **Bring in human oversight:** Humans should always be part of the loop, especially in high-stakes decisions (e.g., lending, hiring). ";

const __vite_glob_1_115 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: ensureFairnessRemoveBias
}, Symbol.toStringTag, { value: 'Module' }));

const evaluateDatasetUsefulness = "To check the quality of a random dataset, I'll:\n\n- **Understand the problem context:** The first thing to do is to make sure you understand the goal you aim to achieve before looking at the dataset. This allows you to know from first glance whether the dataset matches the problem. If the data has irrelevant columns, you should remove them.\n\n- **Test the data quality:** For any problem you are solving, it has most likely been solved before. You can test your dataset against a trusted dataset to measure any deviations that might be in the data. The dataset also needs to represent real-world scenarios.\n\n- **Technical checks:** With technical checks, it's good to remove duplicates in the data. Noise could be present with blurry images or mislabeled samples. You also have to make sure everything is formatted correctly in a consistent format.\n\n- **Assess practical utility:** The dataset has to be big enough for what you need it to do. For traditional machine learning, the dataset should be more than 10 times greater than the number of features per class. For deep learning, you should aim for 100 features per class to help avoid overfitting.\n\nA dataset is only useful when it aligns with the problem's context and goals. It must pass accuracy, completeness, and balance checks. Finally, it must meet size and representative requirements. ";

const __vite_glob_1_116 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: evaluateDatasetUsefulness
}, Symbol.toStringTag, { value: 'Module' }));

const evaluateMedicalClassificationModel = "Healthcare classification models use machine learning to analyze vast amounts of patient data. They identify complex patterns and relationships, helping healthcare professionals predict health risks more accurately. These models help doctors make the right decision and reduce diagnostic errors. To evaluate classification models, you have to know the right metrics to use.\n\n- **Accuracy, sensitivity, and specificity metrics**: Accuracy, sensitivity, and specificity are critical in evaluating medical models. Accuracy measures the overall correctness of predictions. Sensitivity, or recall, shows the model's ability to identify positive cases. Specificity indicates how well it identifies negative cases. These metrics are vital for diagnostic accuracy assessment in various medical fields.\n- **ROC curves and AUC analysis**: ROC curves and AUC analysis are key metrics for healthcare AI performance. They evaluate a model's ability to distinguish between classes at different thresholds. A higher AUC score means better performance in distinguishing between positive and negative cases.\n- **Cross-validation techniques**: Cross-validation estimates a model's performance on unseen data. Techniques like k-fold cross-validation split data into subsets for training and testing, providing a robust assessment of the model's ability to generalize. ";

const __vite_glob_1_117 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: evaluateMedicalClassificationModel
}, Symbol.toStringTag, { value: 'Module' }));

const evaluationMetrics = "Once a machine learning model has been created, it is important to evaluate and test how well it performs on data. An evaluation metric is a mathematical quantifier of the quality of the model. Precision, Recall, F1 Score, and AUC-ROC are all evaluation metrics.\n\n- **Precision** is all about how accurate your positive predictions are. Of all the items your model labeled as positive, how many were actually positive?\n  **Formula = TP / (TP + FP).** It tells you how much you can trust the positives your model finds.\n- **Recall** focuses on finding all the actual positives. It measures how well your model catches everything it should've caught.\n  **Formula = TP / (TP + FN).** It's especially useful when missing a positive is costly like missing a cancer diagnosis.\n- **F1 Score:** F1 Score combines Recall and Precision into one performance metric. The F1 Score is the weighted average of Precision and Recall. Therefore, this score takes both false positives and false negatives into account. F1 is usually more useful than Accuracy, especially if you have an uneven class distribution.\n- **AUC-ROC:** The AUC-ROC curve is a tool for evaluating the performance of binary classification models. It plots the True Positive Rate (TPR) against the False Positive Rate (FPR) at different thresholds, showing how well a model can distinguish between two classes, such as positive and negative outcomes. It provides a graphical representation of the model's ability to distinguish between two classes, like a positive class for the presence of a disease and a negative class for the absence of a disease.\n\n**Key:** TP = True Positive, FP = False Positive, FN = False Negative. ";

const __vite_glob_1_118 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: evaluationMetrics
}, Symbol.toStringTag, { value: 'Module' }));

const falsePositiveVsNegative = "False Positive Rate (FPR) is the proportion of actual negatives that are incorrectly identified to be true. False Negative Rate is the proportion of actual positives that are incorrectly identified as negatives.\n\nIn a fraud detection scenario, both of these have damaging consequences:\n\n**False Positive Rate (FPR)**: If a model has a high false positive rate, it means the system flags many legitimate transactions as fraudulent. This will lead to customer frustration, as their transactions will be flagged regularly, and they could leave.\n\n**False Negative Rate (FNR)**: If a model has a high false negative rate, it means many fraudulent transactions are not detected, which could lead to significant financial business loss. ";

const __vite_glob_1_119 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: falsePositiveVsNegative
}, Symbol.toStringTag, { value: 'Module' }));

const featureSelection = "When building a predictive model, I like to combine practical steps and proven techniques to ensure that the features I include actually help the model rather than add noise, redundancy, or overfitting risk.\n\n**I'll approach like this:**\n\n1. **Start with domain knowledge:** Talk to stakeholders and review documentation to understand what features make the most sense in our business context.\n2. **Use filter methods for a first pass:** I run statistical checks like correlation, ANOVA, chi-square tests, or mutual information to remove irrelevant or redundant features. Filter methods are fast, which is especially helpful when you're working with high-dimensional data.\n3. **Apply wrapper methods for performance tuning:** For a more refined selection, I use wrapper methods like Recursive Feature Elimination (RFE). These methods evaluate subsets of features based on how well the model performs, which helps surface the most predictive combinations. They take more time but are worth it for high-impact models.\n4. **Leverage embedded methods for efficiency:** Models like Lasso (L1), Ridge (L2), and tree-based models (Random Forest, XGBoost) have built-in feature importance. I like these because they optimize feature selection during model training, balancing speed and accuracy.\n5. **Hybrid approach:** Sometimes, I start with a filter method to reduce dimensions and then fine-tune with wrapper or embedded methods. This hybrid approach saves time and improves performance.\n\n**How I decide what to drop or keep:**\n\n- If a feature is highly correlated with another, I drop the weaker or noisier one.\n- If it has low variance and no predictive power, it goes.\n- If it helps interpretability or improves metrics on validation data, I keep it.\n- If it harms generalization or adds complexity, I drop it. ";

const __vite_glob_1_120 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: featureSelection
}, Symbol.toStringTag, { value: 'Module' }));

const fineTuningVsMoreData = "Fine-tuning a model is the process of adapting a pre-trained model for specific tasks or use cases. The reasoning behind fine-tuning is that it is easier and cheaper to improve the capabilities of a pre-trained base model that has already learned road knowledge about the task than it is to train a new model from scratch.\n\nGeneralization is a measure of how your model performs in predicting unseen data. Generalizing with more data is improving the model's ability to make predictions on new data rather than the data it was trained on.\n\nChoosing whether to generalize with more data or fine-tune to achieve your goal depends on the specific situation.\n\n**For specialization with fine-tuning:**\n\n- It is better when high performance is needed on a very specific task or domain.\n- It is more efficient to use when you have limited resources, but good data for a specific task.\n- It can achieve strong results with smaller models.\n\n**For generalization with more data:**\n\n- It is better for models that need to handle a wide range of tasks.\n- It is great for situations where overfitting will be a problem. ";

const __vite_glob_1_121 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: fineTuningVsMoreData
}, Symbol.toStringTag, { value: 'Module' }));

const groupAggregateDataPython = "Basic group and sum:\n\n```python\ndf.groupby('category')['sales'].sum()\n```\n\nFor more complex aggregations:\n\n```python\n# Multiple aggregations\ndf.groupby('category').agg({\n    'sales': ['sum', 'mean', 'count'],\n    'profit': ['min', 'max']\n})\n\n# Custom aggregation functions\ndf.groupby('category')['sales'].agg(lambda x: x.max() - x.min())\n\n# Reset index to convert back to a regular DataFrame\ndf.groupby('category')['sales'].sum().reset_index()\n``` ";

const __vite_glob_1_122 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: groupAggregateDataPython
}, Symbol.toStringTag, { value: 'Module' }));

const handlingMissingData = "After observing that my data set has missing values, I'll figure out how it occurs. Are they represented as **NaN,** **None,** empty strings, weird characters like -999, a combination of two or more, or something else?\n\n![How to handle missing data](https://assets.roadmap.sh/guest/how-do-you-handle-missing-data-vrptm.png)\n\nOnce I make sense of what my missing data looks like, I dig into why these values are missing, and they usually fall into three categories:\n\n- **Missing Completely At Random (MCAR):** No pattern, just random gaps. These are usually safe to drop, especially if there aren't many.\n\n    **Example:** In a survey dataset, 10% of income entries are missing due to a technical glitch that affected a random subset of responses. There's no pattern based on age, education, employment status, or anything else.\n\n- **Missing At Random (MAR):** This is when the missing data is related to *other observed variables*, but not to the income value itself.\n\n    **Example:** In the same dataset, 10% of `income` values are missing, mostly among respondents who are students. Here, missing data is related to the `occupation` variable, not the actual income value. Impute based on related features like `occupation`, `education level`, or `age`. Impute based on related features like `occupation`, `education level`, or `age`. Safe to drop or impute with mean/median since the missing data doesn't introduce bias.\n\n- **MNAR (Missing Not At Random):** The reason it's missing is tied to the value itself. \n\n    **Example:** If high spenders choose not to share income, that's tougher to handle and sometimes better tracked with a missingness flag. The probability of missingness increases with the income amount. Imputation is risky here. I'll consider flagging missingness with a binary indicator (`income_missing`) or using models that can account for MNAR, like EM algorithms or data augmentation techniques.\n\nOnce I know the type of missingness, I choose one of the following:\na. **Deletion (if safe):** \n\n- **Listwise:** Drop rows with missing values (only when missingness is random and small). \n- **Pairwise:** Use available values for calculations, such as correlations. \n- **Drop columns:** Remove low-value features with lots of missing data.\n\nb.  **Simple imputation:**\n\n- **Mean/Median/Mode:** Use for numeric or categorical columns, depending on distribution.\n- **Arbitrary values:** Fill with 0 or \"Unknown\" if it makes sense contextually.\n- **Forward/Backward fill:** Best for time series to keep temporal consistency.\n\nc.  **Advanced imputation:**\n\n- **KNN imputer:** Fills gaps by finding similar rows using distance metrics.\n- **Iterative imputer:** Builds a model with other columns to estimate missing values.\n- **Interpolation:** Good for numeric sequences, especially when data follows a trend.\n\nd.  **Use missingness as a feature:**\n\n- If the missing value could carry a signal, I add a binary indicator column (e.g., was_missing = 1).\n\ne.  **Oversampling or undersampling:**\n\n- If missing data causes class imbalance, I use resampling to maintain a fair target distribution.\n\n**Common pitfall**:\nFilling in values without understanding the pattern of missingness. For example, using mean imputation on MNAR data can introduce bias and weaken your model's predictive power. ";

const __vite_glob_1_123 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handlingMissingData
}, Symbol.toStringTag, { value: 'Module' }));

const handlingNullValuesPandas = "Basic null handling options:\n\n```python\ndf.fillna(0)      # Replace with 0  \ndf.dropna()       # Drop rows with nulls\n```\n\nOther methods to consider:\n\n```python\n# Fill with mean/median/mode\ndf['column'].fillna(df['column'].mean())\ndf['column'].fillna(df['column'].median())\ndf['column'].fillna(df['column'].mode()[0])\n\n# Forward/backward fill\ndf.fillna(method='ffill')  # Use previous value\ndf.fillna(method='bfill')  # Use next value\n\n# Interpolation\ndf.interpolate()\n``` ";

const __vite_glob_1_124 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handlingNullValuesPandas
}, Symbol.toStringTag, { value: 'Module' }));

const imbalancedData = "Imbalanced data is a situation where the classes, labels, or categories in a dataset are not equally represented. In imbalanced datasets, one category has significantly more or fewer samples than the others. Imbalanced data refers to a common issue in supervised machine learning and deep learning where there is a non-uniform distribution of samples among different classes. This can lead to biased outcomes in models, such as those used in healthcare services, impacting their reliability and effectiveness.\n\nFor example, if you build an email spam detection model and your dataset contains 5% spam emails and 95% non-spam emails, the data is imbalanced toward non-spam. This imbalance can negatively affect the model's performance, especially in production, because it may achieve high accuracy by simply predicting the majority class while failing to detect spam effectively.";

const __vite_glob_1_125 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: imbalancedData
}, Symbol.toStringTag, { value: 'Module' }));

const investigateTrafficDrop = "To analyze a sudden drop in website traffic, I would follow these steps:\n\n- **Determine if it's a drop or a trend:** The first thing to do is try to understand whether your traffic has been declining for a while or if it has suddenly dropped for a day or two.  \n- **Rule out any manual actions:** Sometimes, traffic drops happen because of a Google penalty. Check to see if there are any recent changes that you might have fallen foul of. Also, make sure that updates you made to your website's content didn't cause a problem. \n- **Check for algorithm updates:** Google frequently updates its ranking algorithm. When your site's performance drops suddenly, it's worth investigating whether an update might be responsible.\n- **Investigate technical issues:** Some of the most common technical issues are indexing errors, site speed, performance, and mobile usability.\n- **Check competitor activity:** Sometimes, traffic dips occur because competitors have stepped up their game. SEO tools like Ahrefs, SEMrush, or Moz help track your competitors' backlinks, keywords, and rankings. Check to see whether your competitors have started outranking you for previously held keywords or launched new content targeting your primary audience. ";

const __vite_glob_1_126 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: investigateTrafficDrop
}, Symbol.toStringTag, { value: 'Module' }));

const kmeansClusteringPython = "**Basic usage:**\n\n```python\nfrom sklearn.cluster import KMeans  \nkmeans = KMeans(n_clusters=3).fit(X)\nlabels = kmeans.labels_\n```\n\n**Best practices for K-Means:**\n\n```python\n# Scale features\nfrom sklearn.preprocessing import StandardScaler\nX_scaled = StandardScaler().fit_transform(X)\n\n# Use elbow method to find optimal k\ndistortions = []\nK_range = range(1, 10)\nfor k in K_range:\n    kmeans = KMeans(n_clusters=k, random_state=42)\n    kmeans.fit(X_scaled)\n    distortions.append(kmeans.inertia_)\n\n# Plot elbow curve\nimport matplotlib.pyplot as plt\nplt.plot(K_range, distortions)\nplt.xlabel('k')\nplt.ylabel('Distortion')\nplt.title('Elbow Method For Optimal k')\n``` ";

const __vite_glob_1_127 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: kmeansClusteringPython
}, Symbol.toStringTag, { value: 'Module' }));

const knnVsKmeans = "KNN stands for K-nearest neighbors is a classification (or regression) algorithm that, to determine the classification of a point, combines the classification of the K nearest points. It is **supervised** because you are trying to classify a point based on the known classification of other points.\n\n**K-means** is a clustering algorithm that tries to partition a set of points into K sets (clusters) such that the points in each cluster tend to be near each other. It is **unsupervised** because the points have no external classification.\n\n![KNN vs. K-means](https://assets.roadmap.sh/guest/knn-vs-k-means-iqkbo.png)\n\nThis table shows the difference between KNN and K-means depending on the use case, data usage, purpose, and other features.\n\n| **Feature**          | **K-Nearest Neighbors (KNN)**                                              | **K-Means Clustering**                                              |\n| -------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------- |\n| **Algorithm Type**   | Supervised Learning (Classification/Regression)                            | Unsupervised Learning (Clustering)                                  |\n| **Purpose**          | Classifies new data points on labeled training data                        | Groups unlabeled data points into clusters                          |\n| **Data Usage**       | Uses the entire dataset for predictions                                    | Splits the data into clusters iteratively                           |\n| **Scalability**      | Slow for large datasets because all data points are needed for predictions | Faster for large datasets because initial centroids are already set |\n| **Example Use Case** | Image Classification, Recommendation Systems                               | Customer Grouping                                                   | ";

const __vite_glob_1_128 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: knnVsKmeans
}, Symbol.toStringTag, { value: 'Module' }));

const lindebergFellerClt = "This is a curveball question because the interviewer isn't really asking about the classic CLT. They're testing your knowledge about the Lindeberg-Feller CLT.\n\nIn the classic CLT, all the variables are independent and from the same probability distribution (identically distributed). But here, the interviewer is saying: What if they're still independent but not identically distributed? Lindeberg-Feller helps in situations like this.\n\nIt states that as long as the variables are independent, have finite second moments (meaning their variances aren't huge), and no single variable dominates (the Lindeberg condition), the normalized sum of those variables will still approach a normal distribution. So, even with different distributions, if those conditions hold, the average still forms a bell curve.";

const __vite_glob_1_129 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: lindebergFellerClt
}, Symbol.toStringTag, { value: 'Module' }));

const linearRegression = "Linear regression is a statistical method used to model the relationship between a dependent variable and one or more independent variables. It is a type of supervised machine learning algorithm that computes the linear relationship between the dependent variable and one or more independent features by fitting a linear equation with observed data. It predicts the output variables based on the independent input variable.\n\nFor example, if you want to predict someone's salary, you use various factors such as years of experience, education level, industry of employment, and location of the job. Linear regression uses all these parameters to predict the salary as it is considered a linear relation between all these factors and the price of the house.\n\n**Assumptions for linear regression include:**\n\n- **Linearity:** Linear regression assumes there is a linear relationship between the independent and dependent variables. This means that changes in the independent variable lead to proportional changes in the dependent variable, whether positively or negatively.\n- **Independence of errors:** The observations should be independent from each other, that is, the errors from one observation should not influence another.\n- **Homoscedasticity (equal variance):** Linear regression assumes the variance of the errors is constant across all levels of the independent variable(s). This indicates that the amount of the independent variable(s) has no impact on the variance of the errors.\n- **Normality of residuals:** This means that the residuals should follow a bell-shaped curve. If the residuals are not normally distributed, then linear regression will not be an accurate model.\n- **No multicollinearity:** Linear regression assumes there is no correlation between the independent variables chosen for the model. ";

const __vite_glob_1_130 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: linearRegression
}, Symbol.toStringTag, { value: 'Module' }));

const linearVsLogisticRegression = "A linear regression algorithm defines a linear relationship between independent and dependent variables. It uses a linear equation to identify the line of best fit (straight line) for a problem, which it then uses to predict the output of the dependent variables.\n\n![Linear and logistic regression](https://assets.roadmap.sh/guest/what-is-linear-and-logistic-regression-ipjtz.png)\n\nA logistic regression algorithm predicts a binary outcome for an event based on a dataset's previous observations. Its output lies between 0 and 1. The algorithm uses independent variables to predict the occurrence or failure of specific events.\n\nYou use linear regression when the outcome is a continuous value, such as price or temperature. You should use logistic regression when the outcome is a categorical value like spam/not spam, yes/no, etc.\n\n![Linear vs. logistic regression](https://assets.roadmap.sh/guest/linear-vs-logistic-regression-a7cc3.png) ";

const __vite_glob_1_131 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: linearVsLogisticRegression
}, Symbol.toStringTag, { value: 'Module' }));

const logisticRegression = "Logistic regression is a supervised machine learning algorithm commonly used for binary classification tasks by predicting the probability of an outcome, event, or observation. The model delivers a binary outcome limited to two possible outcomes: yes/no, 0/1, or true/false. Logical regression analyzes the relationship between one or more independent variables and classifies the data into discrete classes. This relationship is then used to predict the value of one of those factors, the probability of a binary outcome using the logistic (sigmoid) function. It is mostly used for predictive modeling.\n\nFor example, 0 represents a negative class, and 1 represents a positive class. Logistic regression is commonly used in binary classification problems where the outcome variable reveals either of the two categories (0 and 1).\n\n**Common pitfall:** Misunderstanding that logistic regression is not a classification algorithm but a probability estimator. ";

const __vite_glob_1_132 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: logisticRegression
}, Symbol.toStringTag, { value: 'Module' }));

const longFormatVsWideFormat = "The difference between long format data and wide format data comes down to how your data is structured. A wide format has values that do not repeat in the columns, while a long format has values that do repeat in the columns.\n\nIn wide format, you spread data across columns. Each variable (Jan, Feb, March) gets its own column. You'll usually see this in reports or dashboards.\n\n![Wide format data](https://assets.roadmap.sh/guest/wide-format-data-gxwrc.png)\n\nIn long format, data is stacked in rows. One column stores the values, and another column tells you what those values represent. This format is cleaner for grouped summaries and time series analysis.\n\n![Long format data](https://assets.roadmap.sh/guest/long-format-data-opeyt.png)\n\n**Use case:** Wide format is useful for reporting and making data visualizations. Long format is preferred for time series, grouped summaries, and plotting tools like Seaborn or ggplot.\n\n**Common pitfall:** Trying to perform group-level analysis on wide-format data without reshaping it first. ";

const __vite_glob_1_133 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: longFormatVsWideFormat
}, Symbol.toStringTag, { value: 'Module' }));

const longTailDistribution = "A long-tail distribution is a type of distribution where you group most of the data around the middle, but there are still many rare or unusual values that stretch far out to the sides (tail) and have a big impact.\n\n![Long-tail distribution](https://assets.roadmap.sh/guest/the-long-tail-t20gr.png)\n\n**Some examples are:**\n\n1. **Long-tail keywords in SEO**: A few high-volume keywords (like \"shoes\") get massive search volume, but there's a long tail of specific, niche searches (like \"waterproof hiking shoes for wide feet\") that collectively make up most of the search traffic. These long-tail keywords aren't often searched for, but they convert well.\n\n2. **Book sales**: Bestsellers like *Harry Potter* dominate the market, but tons of niche books (even classics like *Jane Austen*) sell steadily in the background. The collective sales of these less popular books often exceed those of the bestsellers.\n\n3. **Luxury bags**: A few brands are always trending. However, there's a long list of unique, lesser-known ones that still sell and matter to the market.\n\n**Why they're important in classification and regression problems:**\n\nLong-tail distributions can throw off model performance because most models are trained on the majority class, the \"head,\" and ignore rare but important events in the tail. This is risky in cases like fraud detection or churn modeling, where rare events matter most. They also affect Mean Squared Error, which squares the difference between predicted and actual values, so a few extreme errors from tail cases can blow up the score, even if your model does well overall.\n\nLong-tail distributions can create models that are biased toward the majority, skew errors, and cause you to miss rare events that matter. Handling them requires better sampling techniques and using loss functions that properly account for these rare but significant occurrences. ";

const __vite_glob_1_134 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: longTailDistribution
}, Symbol.toStringTag, { value: 'Module' }));

const measureProductLaunchSuccess = "First, define success for that specific launch. Is it getting 1,000 new users in 30 days? Hitting a revenue or CTR goal? Building awareness in a new market? Or collecting feedback for future improvements?\n\nOnce that's clear, measure success using a mix of quantitative and qualitative KPIs across teams like marketing, product, and customer success. Some metrics I'll look at:\n\n- **Launch campaign metrics:** To gauge marketing performance, look at leads generated, channel performance (email, ads, social), website traffic, and press coverage.\n- **Product adoption metrics:** After launch, track trials, usage, activation, and user retention. These show how well the product is landing with your target audience.\n- **Market impact metrics:** Measure business impact through revenue, market share, and win rates against competitors.\n- **Qualitative feedback:** Talk to sales reps, product teams, and customers. Internal and external feedback helps you understand the \"why\" behind the numbers. Blending data with direct feedback gives you a more transparent, more nuanced view of what's working and what to improve.\n\n**Common pitfall:** Focusing only on quantitative metrics without applying nuance to them. An example is tracking metrics like downloads without tracking engagement. Or tracking views without knowing who is viewing them. ";

const __vite_glob_1_135 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: measureProductLaunchSuccess
}, Symbol.toStringTag, { value: 'Module' }));

const mergeOverlappingIntervals = "To merge overlapping intervals, first sort them, then iterate and merge as needed:\n\n```python\ndef merge_intervals(intervals):\n    intervals.sort(key=lambda x: x[0])\n    merged = [intervals[0]]\n    for current in intervals[1:]:\n        last = merged[-1]\n        if current[0] <= last[1]:\n            last[1] = max(last[1], current[1])\n        else:\n            merged.append(current)\n    return merged\n```\n\nSorting takes O(n log n), and the merge step is linear, making this efficient for large datasets. ";

const __vite_glob_1_136 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: mergeOverlappingIntervals
}, Symbol.toStringTag, { value: 'Module' }));

const modelAccuracyBusinessImpact = "There could be multiple reasons why a business could be unsatisfied with a model that has high accuracy. Some reasons are:\n\n- **Focusing on the wrong metric:** Sometimes, a model is not optimized for the specific business problem. Its accuracy is tied to the wrong thing. For example, in fraud detection, it is possible to still miss fraudulent transactions even with high accuracy scores.\n- **Unrealistic expectations:** The model might have unrealistic expectations placed on it to solve problems when, in reality, it is meant to be used in conjunction with other methods and metrics to give a nuanced view.\n- **Overfitting:** It is possible that the high accuracy comes from the model learning the training data rather than learning how to generalize.\n\n**To handle this problem, I'll:**\n\n- **Reevaluate the business goals:** Sometimes, the business goals need to be defined so that there is a specific metric or group of metrics for the model to be trained towards.\n- **Improve the model performance:** You should do a deep dive into the model and fix any issues that you might notice, including overfitting, data issues or feature selection. ";

const __vite_glob_1_137 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: modelAccuracyBusinessImpact
}, Symbol.toStringTag, { value: 'Module' }));

const monitorModelPerformance = "You monitor model performance in production by tracking both functional and operational metrics.\n\n**Functional monitoring** checks the health of the data and the model:\n\n- **Data quality**: Monitor for missing values, duplicates, and syntax errors.\n- **Data/feature drift**: Compare current input data to training data using stats like KL divergence, PSI, chi-squared, etc.\n- **Model drift**: Check if model accuracy drops over time due to changing patterns in the data.\n\n**Operational monitoring** keeps the system running smoothly:\n\n- **System health**: Tracks latency, errors, and memory usage.\n- **Input data health**: Watch for type mismatches, nulls, and out-of-range values.\n- **Model performance**: Use precision/recall, RMSE, or top-k accuracy depending on the use case.\n- **Business KPIs**: Tie model performance to actual business outcomes (e.g., conversions, revenue impact). ";

const __vite_glob_1_138 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: monitorModelPerformance
}, Symbol.toStringTag, { value: 'Module' }));

const multicollinearity = "Multicollinearity is when two or more independent variables in a regression model are highly correlated, meaning they tell similar stories. This makes it hard for the model to figure out which variable is actually influencing the target, leading to unreliable or unstable coefficient estimates. \n\nFor example, in a regression model looking at economic growth, common variables will be GDP, Unemployment Rate, and Consumer Spending. These variables are all related, and the model might not be as effective as it should be.\n\n**To detect multicollinearity use:**\n\n- **Correlation matrix:** A correlation matrix detects multicollinearity by visualizing the strength of relationships between variables. A general rule is that any correlation value above 0.6 indicates strong multicollinearity.\n- **Variance inflation factor (VIF):** VIF detects multicollinearity by giving a numerical value that indicates how much the variance of a regression coefficient is inflated due to multicollinearity. A VIF value greater than 5 indicates moderate multicollinearity, while values above 10 suggest severe multicollinearity.\n- **Condition index:** The condition index is a tool for detecting multicollinearity. Values above 10 indicate moderate multicollinearity, and values above 30 indicate severe multicollinearity. The condition index works by checking how much the independent variables are related to each other by examining the relationships between their eigenvalues.\n\n**Common pitfall:** Including highly correlated predictors without checking VIF may inflate model error and reduce stability. ";

const __vite_glob_1_139 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: multicollinearity
}, Symbol.toStringTag, { value: 'Module' }));

const nullHypothesis = "The null hypothesis (H₀) is the starting point and default assumption of every statistical analysis. The idea is that there's nothing happening in your data: no stories, no effect, no relationship between the variables you're testing until your data gives strong evidence to reject it.\n\n![When to reject null hypothesis](https://assets.roadmap.sh/guest/when-to-reject-null-hypothesis-rchdo.png)\n\nTo know whether to reject the null hypothesis, here's what I do:\n\nFirst, I set a significance level, usually 0.05. Then, I calculate the p-value. If the p-value is less than or equal to 0.05, I reject the null hypothesis because the result is statistically significant. If it's more than 0.05, I don't reject it because there isn't enough evidence.";

const __vite_glob_1_140 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: nullHypothesis
}, Symbol.toStringTag, { value: 'Module' }));

const overfittingPrevention = "Overfitting in machine learning happens when the model learns from the training data too well, including non-relevant details. This leads the model to perform very well on the training data but poorly on other data.\n\n**Prevention techniques:**\n\n- **Regularization (L1/L2):** This method adds a penalty to large weights to keep the model from becoming too complex.\n- **Cross-validation:** This helps test the model on different slices of data to make sure it generalizes well.\n- **Pruning (for tree models):** Cuts back unnecessary branches that overcomplicate the model.\n- **Early stopping:** Stops training when performance stops improving on the validation set.\n- **Dropout (for neural nets):** This method randomly drops neurons during training so the network doesn't become too dependent on specific paths. ";

const __vite_glob_1_141 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: overfittingPrevention
}, Symbol.toStringTag, { value: 'Module' }));

const pValueInterpretation = "A p-value is a statistical measure that determines the significance of the result you got in a hypothesis test. A small p-value (<0.05) indicates strong evidence that the null hypothesis is wrong, meaning you should reject it.\n\n![P-value interpretation](https://assets.roadmap.sh/guest/how-to-interpret-p-value-hzfqe.png)\n\nIf the probability of the p-value is greater than 0.05, there is not enough evidence to reject the null hypothesis. For example, if you conduct an experiment and the p-value is 0.03, you should reject the null hypothesis. ";

const __vite_glob_1_142 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: pValueInterpretation
}, Symbol.toStringTag, { value: 'Module' }));

const probabilityDistributions = "A probability distribution tells you how likely different possible outcomes are for a random event or experiment. It maps out the chances of different results happening. It’s a way of saying, “Here’s everything that could happen, and how often I expect each one to happen.”\n\nThe commonly used probability distributions are normal (bell curve), binomial, Poisson, and uniform distributions.\n\n**Common pitfall:** Different types of distributions need different types of analysis. Using the wrong type of distribution for analysis can lead to wrong results. Another common problem is assuming that data follow a normal distribution without testing for normality.";

const __vite_glob_1_143 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: probabilityDistributions
}, Symbol.toStringTag, { value: 'Module' }));

const randomForestVsDecisionTree = "This table describes the difference between decision trees and random forests and when to use them based on features like accuracy, training time, etc.\n\n![Decision tree vs random forest](https://assets.roadmap.sh/guest/random-forest-vs-decision-tree-e8js9.png)\n\nA random forest is a collection of multiple decision trees, while a decision tree is just a single model that predicts outcomes based on a series of decisions. For a random forest, each tree is trained on a subset of the data and a subset of features, and both of these are random. A decision tree is a simple, tree-like structure used to represent decisions and the possible outcomes from them. Random forest multiple trees use bootstrapped samples and random feature selection, then average predictions to improve accuracy and reduce overfitting. ";

const __vite_glob_1_144 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: randomForestVsDecisionTree
}, Symbol.toStringTag, { value: 'Module' }));

const rankSqlSequence = "```\nGiven values: 100, 90, 90, 80\nRANK(): Skips ranks after ties\n→ 1, 2, 2, 4\nDENSE_RANK(): No skipping\n→ 1, 2, 2, 3\nROW_NUMBER(): Ignores ties\n→ 1, 2, 3, 4\n```";

const __vite_glob_1_145 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: rankSqlSequence
}, Symbol.toStringTag, { value: 'Module' }));

const realTimeMedian = "To compute the median in a stream of numbers, use two heaps:\n\n- Max-heap for the lower half\n- Min-heap for the upper half\n- Keep both heaps balanced\n- The median is either the top of one heap or the average of both tops\n\n```python\nimport heapq\n\nclass MedianFinder:\n    def __init__(self):\n        self.small = []  # max heap (negative values)\n        self.large = []  # min heap\n    \n    def add_num(self, num):\n        if len(self.small) == len(self.large):\n            heapq.heappush(self.large, -heapq.heappushpop(self.small, -num))\n        else:\n            heapq.heappush(self.small, -heapq.heappushpop(self.large, num))\n    \n    def find_median(self):\n        if len(self.small) == len(self.large):\n            return (self.large[0] - self.small[0]) / 2.0\n        else:\n            return self.large[0]\n``` ";

const __vite_glob_1_146 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: realTimeMedian
}, Symbol.toStringTag, { value: 'Module' }));

const regularization = "Regularization is a technique in machine learning to prevent models from overfitting. Overfitting happens when a model doesn't just learn from the underlying patterns (signals) in the training data but also picks up and amplifies the noise in it. This leads to a model that performs well on training data but poorly on new data.\n\nL1 and L2 regularization are methods used to mitigate overfitting in machine learning models by adding a penalty term on coefficients to the model's loss function. This penalty discourages the model from assigning too much importance to any single feature (represented by large coefficients), making the model more straightforward. Regularization keeps the model balanced and focused on the true signal, enhancing its ability to generalize to unseen data.\n\nA regression model that uses the L1 regularization technique is called lasso regression, and a model that uses the L2 is called ridge regression.\n\n- **L1 Regularization:** Also called a lasso regression, this adds the absolute value of the sum (\"absolute value of magnitude\") of coefficients as a penalty term to the loss function.\n- **L2 Regularization:** Also called a ridge regression, this adds the squared sum (\"squared magnitude\") of coefficients as the penalty term to the loss function. ";

const __vite_glob_1_147 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: regularization
}, Symbol.toStringTag, { value: 'Module' }));

const removeDuplicatesDataframe = "To remove duplicates from a DataFrame:\n```python\ndf = df.drop_duplicates()\n```\nYou can also refine this by specifying columns:\n\n```python\n# Drop duplicates based on specific columns\ndf = df.drop_duplicates(subset=['customer_id', 'product_id'])\n```\n\nControl which duplicates to keep:\n\n```python\n# Keep first or last occurrence\ndf = df.drop_duplicates(keep='last')  # or 'first'\n``` ";

const __vite_glob_1_148 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: removeDuplicatesDataframe
}, Symbol.toStringTag, { value: 'Module' }));

const rightVsLeftJoin = "A RIGHT JOIN is the same as a LEFT JOIN with the table order reversed:\n\n```sql\nSELECT * FROM A RIGHT JOIN B ON A.id = B.id;\nSELECT * FROM B LEFT JOIN A ON A.id = B.id;\n``` ";

const __vite_glob_1_149 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: rightVsLeftJoin
}, Symbol.toStringTag, { value: 'Module' }));

const rmseMseLinearRegression = "**To evaluate a regression model:**\n\n```python\nfrom sklearn.metrics import mean_squared_error  \nimport numpy as np  \nmse = mean_squared_error(y_true, y_pred)  \nrmse = np.sqrt(mse)\n```\n\n- **MSE:** Penalizes large errors heavily.\n- **RMSE:** More interpretable because it's in the same unit as the target.\n\n**Another alternative:**\n\n```python\nfrom sklearn.metrics import mean_absolute_error\nmae = mean_absolute_error(y_true, y_pred)\n```\n\n**MAE** is less sensitive to outliers. ";

const __vite_glob_1_150 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: rmseMseLinearRegression
}, Symbol.toStringTag, { value: 'Module' }));

const roleOfStatistics = "The role of statistics in data science is to help data scientists understand and summarize data, uncover patterns, validate models, handle uncertainty (like missing or noisy data), and make evidence-based decisions.\n\n**For example**:\n\n- Mean and median summarize central tendencies.\n- Standard deviation and variance measure variability.\n- Hypothesis testing validates assumptions.\n- Regression analysis predicts relationships between variables.\n- Bayesian inference updates beliefs as new data comes in.\n\n**Use case**: A marketing team runs an A/B test to compare two email campaigns. Statistical methods help determine whether the difference in click-through rates is real or just a coincidence. ";

const __vite_glob_1_151 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: roleOfStatistics
}, Symbol.toStringTag, { value: 'Module' }));

const sqlJoiningOrdersCustomers = "To join order details with corresponding customer information, you use a simple inner join:\n\n```sql\nSELECT o.*, c.name, c.email\nFROM orders o\nJOIN customers c ON o.customer_id = c.id;\n```\n\nThis pulls all orders where a matching customer exists. If you need **every order**, even those without matching customers, switch to a LEFT JOIN:\n\n```sql\nSELECT o.*, c.name, c.email\nFROM orders o\nLEFT JOIN customers c ON o.customer_id = c.id;\n``` ";

const __vite_glob_1_152 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sqlJoiningOrdersCustomers
}, Symbol.toStringTag, { value: 'Module' }));

const sqlSecondHighestSalary = "To find the second highest salary, you can take one of two common methods: a subquery or a window function.\n\n**Method 1: Subquery method**\nYou first get the maximum salary from the table. Then, you find the highest salary that's less than that max, giving you the second highest salary.\n\nThis method is clean and efficient:\n\n```sql\nSELECT MAX(salary) AS SecondHighest\nFROM employee\nWHERE salary < (SELECT MAX(salary) FROM employee);\n```\n\n**Method 2: Window function with DENSE_RANK()**\nYou rank all salaries in descending order using DENSE_RANK(), then filter for rank 2 to get the second highest. The LIMIT 1 ensures only one row is returned in case of ties. This method is better for flexibility if you want to choose the third highest or fourth, etc.\n\n```sql\nSELECT salary AS SecondHighest\nFROM (\n  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank\n  FROM employee\n) ranked\nWHERE rank = 2\nLIMIT 1;\n```\n";

const __vite_glob_1_153 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sqlSecondHighestSalary
}, Symbol.toStringTag, { value: 'Module' }));

const sqlTopCustomersLastQuarter = "To find your top customers *who also bought across multiple categories*, filter purchases within 3 months, group by customer, and apply category constraints with HAVING:\n\n```sql\nSELECT customer_id, SUM(amount) AS total_spent\nFROM purchases\nWHERE purchase_date >= DATE_SUB(CURDATE(), INTERVAL 3 MONTH)\nGROUP BY customer_id\nHAVING COUNT(DISTINCT category_id) >= 3\nORDER BY total_spent DESC\nLIMIT 5;\n```\n\nThis makes sure each customer bought from **at least 3 categories**. WHERE filters rows **before** grouping, while HAVING filters groups **after**. ";

const __vite_glob_1_154 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sqlTopCustomersLastQuarter
}, Symbol.toStringTag, { value: 'Module' }));

const sqlTopCustomersRevenue = "To get the highest-spending customers, group by customer, sum their order totals, sort by that total, and limit the results:\n\n```sql\nSELECT customer_id, SUM(total_amount) AS revenue\nFROM orders\nGROUP BY customer_id\nORDER BY revenue DESC\nLIMIT 5;\n```\n\nTo add customer names, just join with the customers' table.\n\n**Common pitfall:** Not grouping properly before ordering can result in incorrect aggregates. ";

const __vite_glob_1_155 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sqlTopCustomersRevenue
}, Symbol.toStringTag, { value: 'Module' }));

const supportVectorsSvm = "A Support Vector Machine (SVM) is a supervised machine learning algorithm used mainly for classification tasks. It finds the optimal hyperplane in an N-dimensional space that separates data points into different classes while maximizing the margin between the closest points of each class.\n\nSupport vectors are the most important data points, useful in defining the optimal hyperplane that separates different classes. ";

const __vite_glob_1_156 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: supportVectorsSvm
}, Symbol.toStringTag, { value: 'Module' }));

const tTestVsZTest = "The difference between a t-test and a z-test comes down to what you know about your data: the sample size and the population standard deviation.\n\n![t-test vs z-test](https://assets.roadmap.sh/guest/t-test-vs-z-test-wtm6x.png)\n\nUse a t-test when:\n\n- The sample size is small (usually n ≤ 30).\n- The population standard deviation is unknown.\n- You still want to compare means (sample vs. population or between two samples).\n\nUse a z-test when:\n\n- You know the population standard deviation.\n- Your sample size is large (typically n > 30).\n- The data is roughly normally distributed.";

const __vite_glob_1_157 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: tTestVsZTest
}, Symbol.toStringTag, { value: 'Module' }));

const typeIVsTypeIiErrors = "The difference between Type I and Type II error is that Type I error rejects a true null hypothesis (a false positive), while Type II error fails to reject a false null hypothesis (a false negative).\n\n![Type I vs Type II error](https://assets.roadmap.sh/guest/difference-between-type-i-and-type-ii-errors-90mpj.png)\n\nLet's assume you're testing a new drug. The null hypothesis is that the drug doesn't work, and in reality, it indeed doesn't. A type I error occurs when your test says it does, but it doesn't; this is a false positive. A type II, on the other hand, is when the drug works in reality, but your tests say it doesn't: a false negative.";

const __vite_glob_1_158 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: typeIVsTypeIiErrors
}, Symbol.toStringTag, { value: 'Module' }));

const typesOfMachineLearning = "The difference between supervised, unsupervised, and reinforcement learning lies in how the model learns. This table describes their contrasts and common use cases for each.\n\n| **Type of Learning**       | **Description**                                                                                                                                               | **Common Use Cases**                             |\n| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |\n| **Supervised Learning**    | Models are trained on labeled data, where each example includes an input and a known output. The model learns to predict the output for new, unseen inputs.   | Regression and classification tasks.             |\n| **Unsupervised Learning**  | Models are trained on unlabeled data. The goal is to find hidden patterns or structure in the data without explicit output labels.                            | Clustering, dimensionality, and reduction tasks. |\n| **Reinforcement Learning** | A model learns by trial and error, receiving rewards or penalties based on its actions. It aims to make a sequence of decisions to maximize reward over time. | Games, robotics, and AI decision-making systems. | ";

const __vite_glob_1_159 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: typesOfMachineLearning
}, Symbol.toStringTag, { value: 'Module' }));

const univariateBivariateMultivariate = "Univariate analysis is all about looking at one variable on its own, with no comparisons, just understanding its distribution, central tendency, or spread. For example, I might look at the average test score in a class or the frequency of different grade ranges using histograms or summary statistics.\n\n![Univariate, bivariate, and multivariate analysis](https://assets.roadmap.sh/guest/understanding-univariate-bivariate-and-multivariate-analysis-in-data-science-s2663.png)\n\nBivariate analysis looks at the relationship between two variables, such as how students' study time affects their test scores. To analyze this, I'd use tools like correlation, scatter plots, or line graphs to identify trends or patterns.\n\nMultivariate analysis, on the other hand, deals with three or more variables at once. It focuses on understanding how multiple factors combine to influence an outcome. For example, I might explore how sleep hours, study time, and caffeine intake together impact test scores. In that case, I'd use regression or a tree-based model to analyze the combined effect. ";

const __vite_glob_1_160 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: univariateBivariateMultivariate
}, Symbol.toStringTag, { value: 'Module' }));

const varianceInDataScience = "Variance in data science measures the spread between numbers in a dataset. Simply put, it measures how far each number in the set is from the mean (average). It helps us understand how spread out or consistent the values are in a dataset.\n\n**Low variance example:**\nMean: (78 + 79 + 80 + 81 + 82) / 5 = 80";

const __vite_glob_1_161 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: varianceInDataScience
}, Symbol.toStringTag, { value: 'Module' }));

const wideToLongFormat = "To transform data from wide format to long format, I usually use the **melt()** function in pandas to unpivot the columns into rows. It's especially useful when you have repeated measures across columns, like monthly sales or survey responses, and you want to make the data tidy for analysis or plotting.\n\nFor example, if I have a DataFrame where each column represents a month, I'll keep the identifier (like product name) as is, and melt the rest so each row shows one product-month-sales combo. This makes it easier to group, filter, or feed into models.";

const __vite_glob_1_162 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: wideToLongFormat
}, Symbol.toStringTag, { value: 'Module' }));

const ansibleBenefits = "As an open-source tool for configuration management, Ansible provides several benefits when added to your project:\n\n- **Simplicity**: Easy to learn and use with simple YAML syntax.\n- **Agentless**: No need to install agents on managed nodes; instead it uses SSH to communicate with them.\n- **Scalability**: Can manage a large number of servers simultaneously with minimum effort.\n- **Integration**: Ansible integrates well with various cloud providers, CI/CD tools, and infrastructure.\n- **Modularity**: [Extensive library](https://docs.ansible.com/ansible/2.9/modules/list_of_all_modules.html) of modules for different tasks.\n- **Reusability**: Ansible playbooks and roles can be reused and shared across projects.";

const __vite_glob_1_163 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: ansibleBenefits
}, Symbol.toStringTag, { value: 'Module' }));

const autoScaling = "While the specifics will depend on the cloud provider you decide to go with, the generic steps would be the following:\n\n1. **Set up an auto-scaling group**. Create what is usually known as an auto-scaling group, where you configure the minimum and maximum number of instances you can have and their types. Your scaling policies will interact with this group to automate the actions later on.\n2. **Define the scaling policies**. What makes your platform want to scale? Is it traffic? Is it resource allocation? Find the right metric, and configure the policies that will trigger a scale-up or scale-down event on the auto-scaling group you already configured.\n3. **Balance your load**. Now it’s time to set up a load balancer to distribute the traffic amongst all your nodes. \n4. **Monitor**. Keep a constant monitor over your cluster to understand if your policies are correctly configured, or if you need to adapt and tweak them. Once you’re done with the first 3 steps, this is where you’ll constantly be, as the triggering conditions might change quite often.";

const __vite_glob_1_164 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: autoScaling
}, Symbol.toStringTag, { value: 'Module' }));

const blueGreenDeployment = "![Blue vs Green Deployment](https://assets.roadmap.sh/guest/blue-green-deployment-example-wmj10.png)\n\nBlue-green deployment is a release strategy that reduces downtime and the risk of production issues by running two identical production environments, referred to as \"blue\" and \"green.\"\n\nAt a high level, the way this process works is as follows:\n\n- **Setup Two Environments**: Prepare two identical environments: blue (current live environment) and green (new version environment).\n- **Deploy to Green**: Deploy the new version of the application to the green environment through your normal CI/CD pipelines.\n- **Test green**: Perform testing and validation in the green environment to ensure the new version works as expected.\n- **Switch Traffic**: Once the green environment is verified, switch the production traffic from blue to green. Optionally, the traffic switch can be done gradually to avoid potential problems from affecting all users immediately.\n- **Monitor**: Monitor the green environment to ensure it operates correctly with live traffic. Take your time, and make sure you’ve monitored every single major event before issuing the “green light”.\n- **Fallback Plan**: Keep the blue environment intact as a fallback. If any issues arise in the green environment, you can quickly switch traffic back to the blue environment. This is one of the fastest rollbacks you’ll experience in deployment and release management.\n- **Clean Up**: Once the green environment is stable and no issues are detected, you can update the blue environment to be the new staging area for the next deployment.\n\nThis way, you ensure minimal downtime (either for new deployments or for rollbacks) and allow for a quick rollback in case of issues with the new deployment.\n";

const __vite_glob_1_165 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: blueGreenDeployment
}, Symbol.toStringTag, { value: 'Module' }));

const buildPipelines = "A build pipeline is an automated process that compiles, tests, and prepares code for deployment. It typically involves multiple stages, such as source code retrieval, code compilation, running unit tests, performing static code analysis, creating build artifacts, and deploying to one of the available environments.\n\nThe build pipeline effectively removes humans from the deployment process as much as possible, clearly reducing the chance of human error. This, in turn, ensures consistency and reliability in software builds and speeds up the development and deployment process.\n";

const __vite_glob_1_166 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: buildPipelines
}, Symbol.toStringTag, { value: 'Module' }));

const canaryRelease = "![Canary Releases](https://assets.roadmap.sh/guest/canarly-release-explained-c8nco.png)\n\nA canary release is a common and well-known deployment strategy. It works this way: when a  new version of an application is ready, instead of deploying it and making it available to everyone, you gradually roll it out to a small subset of users or servers before being released to the entire production environment.\n\nThis way, you can test the new version in a real-world environment with minimal risk. If the canary release performs well and no issues are detected, the deployment is gradually expanded to a larger audience until it eventually reaches 100% of the users. If, on the other hand, problems are found, the release can be quickly rolled back with minimal impact.\n";

const __vite_glob_1_167 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: canaryRelease
}, Symbol.toStringTag, { value: 'Module' }));

const cicdSetup = "Setting up a CI/CD pipeline from scratch involves several steps. Assuming you’ve already set up your project on a version control system, and everyone in your team has proper access to it, then the next steps would help:\n\n1. **Set up the Continuous Integration (CI)**:\n- Select a continuous integration tool (there are many, like [Jenkins](https://jenkins.io), [GitLab CI](https://about.gitlab.com), [CircleCI](https://circleci.com), pick one).\n- Connect the CI tool to your version control system.\n- Write a build script that defines the build process, including steps like code checkout, dependency installation, compiling the code, and running tests.\n- Set up automated testing to run on every code commit or pull request.\n\n2. **Artifact Storage**:\n- Decide where to store build artifacts (it could be Docker Hub, AWS S3 or anywhere you can then reference from the CD pipeline).\n- Configure the pipeline to package and upload artifacts to the storage after a successful build.\n\n3. **Set up your Continuous Deployment (CD)**:\n- Choose a CD tool or extend your CI tool (same deal as before, there are many options, pick one).\nDefine deployment scripts that specify how to deploy your application to different environments (e.g., development, staging, production).\n- Configure the CD tool to trigger deployments after successful builds and tests.\n- Set up environment-specific configurations and secrets management.\nRemember that this system should be able to pull the artifacts from the continuous integration pipeline, so set up that access as well.\n\n4. **Infrastructure Setup**:\n- Provision infrastructure using IaC tools (e.g., [Terraform](https://terraform.io), [CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)).\n- Ensure environments are consistent and reproducible to reduce times if there is a need to create new ones or destroy and recreate existing ones. This should be as easy as executing a command without any human intervention.\n\n5. **Set up your monitoring and logging solutions**:\n- Implement monitoring and logging for your applications and infrastructure (e.g., Prometheus, Grafana, ELK stack).\n- Remember to configure alerts for critical issues. Otherwise, you’re missing a key aspect of monitoring (reacting to problems).\n\n6. **Security and Compliance**:\n- By now, it’s a good idea to think about integrating security scanning tools into your pipeline (e.g., Snyk, OWASP Dependency-Check).\n- Ensure compliance with relevant standards and practices depending on your specific project’s needs.\n\nAdditionally, as a good practice,  you might also want to document the CI/CD process, pipeline configuration, and deployment steps. This is to train new team members on using and maintaining the pipelines you just created.\n";

const __vite_glob_1_168 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cicdSetup
}, Symbol.toStringTag, { value: 'Module' }));

const clusterHealth = "As usual, there are many options when it comes to monitoring and logging solutions, even in the space of Kubernetes. Some useful options could be a Prometheus and Grafana combo, where you get the monitoring data with the first one and plot the results however you want with the second one.\n\nYou could also set up an EFK-based (using Elastic, Fluentd, and Kibana) or ELK-based (Elastic, Logstash, and Kibana) logging solution to gather and analyze logs.\n\nFinally, when it comes to alerting based on your monitoring data, you could use something like [Alertmanager](https://github.com/prometheus/alertmanager) that integrates directly with Prometheus and get notified of any issues in your infrastructure.\n\nThere are other options out there as well, such as NewRelic or Datadog. In the end, it’s all about your specific needs and the context around them.\n";

const __vite_glob_1_169 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: clusterHealth
}, Symbol.toStringTag, { value: 'Module' }));

const commonIacTools = "![Common IaC Tools](https://assets.roadmap.sh/guest/infrastructure-as-code-tools-oyapx.png)\n\nAs usual, there are several options out there, some of them specialized in different aspects of IaC.\n\n**Configuration management tools**\n\nIf you’re in search of effective configuration management tools to streamline and automate your IT infrastructure, you might consider exploring the following popular options:\n\n- Ansible\n- Chef\n- Puppet\n\nConfiguration management tools are designed to help DevOps engineers manage and maintain consistent configurations across multiple servers and environments. These tools automate the process of configuring, deploying, and managing systems, ensuring that your infrastructure remains reliable, scalable, and compliant with your organization's standards.\n\n**Provisioning and orchestration tools**\n\nIf, on the other hand, you’re looking for tools to handle provisioning and orchestration of your infrastructure, you might want to explore the following popular options:\n\n- Terraform\n- CloudFormation (AWS)\n- Pulumi\n\nProvisioning and orchestration tools are essential for automating the process of setting up and managing your infrastructure resources. These tools allow you to define your IaC, making it easier to deploy, manage, and scale resources across cloud environments.\n\nFinally, if you’re looking for multi-purpose tools, you can try something like:\n\n- Ansible (can also be used for provisioning)\n- Pulumi (supports both IaC and configuration management)\n";

const __vite_glob_1_170 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: commonIacTools
}, Symbol.toStringTag, { value: 'Module' }));

const containerConsistency = "Containers help to add consistency in several ways, here are some examples:\n\n- **Isolation**: Containers encapsulate all the dependencies, libraries, and configurations needed to run an application, isolating it from the host system and other containers. This ensures that the application runs the same way regardless of where the container is deployed.\n- **Portability**: Containers can be run on any environment that supports the container runtime. This means that the same container image can be used on a developer's local machine, a testing environment, or a production server without any kind of modification.\n- **Consistency**: By using the same container image across different environments, you eliminate inconsistencies from differences in configuration, dependencies, and runtime environments. This ensures that if the application works in one environment, it will work in all others.\n- **Version Control**: Container images can be versioned and stored in registries (e.g., Docker Hub, AWS ECR). This allows teams to track and roll back to specific versions of an application if there are problems.\n- **Reproducibility**: Containers make it easier to reproduce the exact environment required for the application. This is especially useful for debugging issues that occur in production but not in development, as developers can recreate the production environment locally.\n- **Automation**: Containers facilitate the use of automated build and deployment pipelines. Automated processes can consistently create, test, and deploy container images.";

const __vite_glob_1_171 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: containerConsistency
}, Symbol.toStringTag, { value: 'Module' }));

const containerVsVm = "A container is a runtime instance of a container image (which is a lightweight, executable package that includes everything needed to run your code). It is the execution environment that runs the application or service defined by the container image.\n\nWhen a container is started, it becomes an isolated process on the host machine with its own filesystem, network interfaces, and other resources.\nContainers share the host operating system's kernel, making them more efficient and quicker to start than virtual machines.\n\nA virtual machine (VM), on the other hand, is an emulation of a physical computer. Each VM runs a full operating system and has virtualized hardware, which makes them more resource-intensive and slower to start compared to containers.\n";

const __vite_glob_1_172 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: containerVsVm
}, Symbol.toStringTag, { value: 'Module' }));

const continuousMonitoring = "As a DevOps engineer, the concept of continuous monitoring should be ingrained in your brain as a must-perform activity.\n\nYou see, continuous monitoring is the practice of constantly overseeing and analyzing an IT system's performance, security, and compliance in real-time.\n\nIt involves collecting and assessing data from various parts of the infrastructure to detect issues, security threats, and performance bottlenecks as soon as they occur.\n\nThe goal is to ensure the system's health, security, and compliance, enabling quick responses to potential problems and maintaining the overall stability and reliability of the environment. Tools like Prometheus, Grafana, Nagios, and Splunk are commonly used for continuous monitoring.\n";

const __vite_glob_1_173 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: continuousMonitoring
}, Symbol.toStringTag, { value: 'Module' }));

const dataMigration = "Handling data migrations in a continuous deployment pipeline is not a trivial task. It requires careful planning to ensure that the application remains functional and data integrity is maintained throughout the process. Here’s an approach:\n\n1. **Backward Compatibility**: Ensure that any database schema changes are backward compatible. This means that the old application version should still work with the new schema. For example, if you're adding a new column, ensure the application can handle cases where this column might be null initially.\n2. **Migration Scripts**: Write database migration scripts that are idempotent (meaning that they can be run multiple times without causing issues) and can be safely executed during the deployment process. Use a tool like Flyway or Liquibase to manage these migrations.\n3. **Separate Deployment Phases**:\n- **Phase 1 - Schema Migration**: Deploy the database migration scripts first, adding new columns, tables, or indexes without removing or altering existing structures that the current application relies on.\n- **Phase 2 - Application Deployment**: Deploy the application code that utilizes the new schema. This ensures that the application is ready to work with the updated database structure.\n- **Phase 3 - Cleanup (Optional)**: After verifying that the new application version is stable, you can deploy a cleanup script to remove or alter deprecated columns, tables, or other schema elements. While optional, this step is advised, as it helps reduce the chances of creating a build up of technical debt for future developers to deal with.\n4. **Feature Flags**: Use feature flags to roll out new features that depend on the data migration. This allows you to deploy the new application code without immediately activating the new features, providing an additional safety net.\n\nThat said, an important, non-technical step that should also be taken into consideration is the coordination with stakeholders, particularly if the migration is complex or requires downtime. Clear communication ensures that everyone is aware of the risks and the planned steps.\n";

const __vite_glob_1_174 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataMigration
}, Symbol.toStringTag, { value: 'Module' }));

const devsecops = "To implement security in a DevOps pipeline (DevSecOps), you should integrate security practices throughout the development and deployment process. This is not just about securing the app once it’s in production, this is about securing the entire application-creation process.\n\nThat includes:\n\n1. **Shift Left Security**: Incorporate security early in the development process by integrating security checks in the CI/CD pipeline. This means performing static code analysis, dependency scanning, and secret detection during the build phase.\n2. **[Automated Testing](https://roadmap.sh/devops/test-automation)**: Implement automated security tests, such as vulnerability scans and dynamic application security testing (DAST), to identify potential security issues before they reach production.\n3. **Continuous Monitoring**: Monitor the pipeline and the deployed applications for security incidents using tools like Prometheus, Grafana, and specialized security monitoring tools.\n4. **Infrastructure as Code - Security**: Ensure that infrastructure configurations defined in code are secure by scanning IaC templates (like Terraform) for misconfigurations and vulnerabilities (like hardcoded passwords).\n5. **Access Control**: Implement strict access controls, using something like role-based access control (RBAC) or ABAC (attribute-based access control) and enforcing the principle of least privilege across the pipeline.\n6. **Compliance Checks**: Figure out the compliance requirements and regulations of your industry and integrate those checks to ensure the pipeline adheres to industry standards and regulatory requirements.\n7. **Incident Response**: Figure out a clear incident response plan and integrate security alerts into the pipeline to quickly address potential security breaches.\n";

const __vite_glob_1_175 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: devsecops
}, Symbol.toStringTag, { value: 'Module' }));

const dockerCompose = "[Docker Compose](https://docs.docker.com/compose/) is, in fact, a tool designed to simplify the definition and management of multi-container Docker applications. It allows you to define, configure, and run multiple containers as a single service using a single YAML file.\n\nIn a multi-container application, Compose provides the following key roles:\n\n1. **Service Definition**: With Compose you can specify multiple services inside a single file, you can also define how each service should be built, the networks they should connect to, and the volumes they should use (if any).\n2. **Orchestration**: It manages the startup, shutdown, and scaling of services, ensuring that containers are launched in the correct order based on the defined dependencies.\n3. **Environment Management**: Docker Compose simplifies environment configuration because it lets you set environment variables, networking configurations, and volume mounts in the docker-compose.yml file.\n4. **Simplified Commands**:  All of the above can be done with a very simple set of commands you can run directly from the terminal (i.e. docker-compose up, or docker-compose down).\n\nIn the end, Docker Compose simplifies the development, testing, and deployment of multi-container applications by giving you, as a user, an extremely friendly and powerful interface.\n";

const __vite_glob_1_176 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dockerCompose
}, Symbol.toStringTag, { value: 'Module' }));

const explainCiVsCd = "Continuous Integration (CI) involves automatically building and testing code changes as they are committed to version control systems (usually Git). This helps catch issues early and improves code quality.\n\nOn the other hand, Continuous Deployment (CD) goes a step further by automatically deploying every change that passes the CI process, ensuring that software updates are delivered to users quickly and efficiently without manual intervention.\n\nCombined, they add a great deal of stability and agility to the development lifecycle.\n";

const __vite_glob_1_177 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: explainCiVsCd
}, Symbol.toStringTag, { value: 'Module' }));

const healthMonitor = "Each DevOps team should define this list within the context of their own project, however, a good rule of thumb is to consider the following metrics:\n\n1. **Build Success Rate**: The percentage of successful builds versus failed builds. A low success rate indicates issues in code quality or pipeline configuration.\n2. **Build Time**: The time it takes to complete a build. Monitoring build time helps identify bottlenecks and optimize the pipeline for faster feedback.\n3. **Deployment Frequency**: How often deployments occur. Frequent deployments indicate a smooth pipeline, while long gaps may signal issues with your CI/CD or with the actual dev workflow.\n4. **Lead Time for Changes**: The time from code commit to production deployment. Shorter lead times are preferable, indicating an efficient pipeline.\n5. **Mean Time to Recovery (MTTR)**: The average time it takes to recover from a failure. A lower MTTR indicates a resilient pipeline that can quickly address and fix issues.\n6. **Test Coverage and Success Rate**: The percentage of code covered by automated tests and the success rate of those tests. High coverage and success rates are good indicators of better quality and reliability.\n7. **Change Failure Rate**: The percentage of deployments that result in failures. A lower change failure rate indicates a stable and reliable deployment process.";

const __vite_glob_1_178 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: healthMonitor
}, Symbol.toStringTag, { value: 'Module' }));

const highAvailability$1 = "Having high availability in your system means that the cluster will always be accessible, even if one or more servers are down.\n\nWhile disaster recovery means having the ability to continue providing service even in the face of a regional network outage (when multiple sections of the world are rendered unreachable).\n\nTo ensure high availability and disaster recovery in a cloud environment, you can follow these strategies if they apply to your particular context:\n\n- **Multi-Region Deployment**: If available, deploy your application across multiple geographic regions to ensure that if one region fails, others can take over, minimizing downtime.\n- **Redundancy**: Keep redundant resources, such as multiple instances, databases, and storage systems, across different availability zones within a region to avoid single points of failure.\n- **Auto-Scaling**: Implement auto-scaling to automatically adjust resource capacity in response to demand, ensuring the application remains available even under high load.\n- **Monitoring and Alerts**: Implement continuous monitoring and set up alerts to detect and respond to potential issues before they lead to downtime. Use tools like CloudWatch, Azure Monitor, or Google Cloud Monitoring.\n- **Failover Mechanisms**: Make sure to set up automated failover mechanisms to switch to backup systems or regions seamlessly in case of a failure in the primary systems.\n\nWhatever strategy (or combination of) you decide to go with, always develop and regularly test a disaster recovery plan that outlines steps for restoring services and data in the event of a major failure.\n\nThis plan should include defined RTO (Recovery Time Objective) and RPO (Recovery Point Objective) targets. Being prepared to deal with the worst case scenarios is the only way, as these types of problems tend to cause chaos in small and big companies alike.\n";

const __vite_glob_1_179 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: highAvailability$1
}, Symbol.toStringTag, { value: 'Module' }));

const iacConcept = "![Explain the concept of IaC](https://assets.roadmap.sh/guest/infrastructure-as-code-with-terraform-fbhi6.png)\n\nIaC (Infrastructure as Code) is all about managing infrastructure through code, instead of using other more conventional configuration methods. Specifically in the context of Terraform, here is how you’d want to approach IaC:\n\n- **Configuration Files**: Define your infrastructure using HCL or JSON files.\n- **Execution Plan**: Generate a plan showing the changes needed to reach the desired state.\n- **Resource Provisioning**: Terraform will then apply the plan to provision and configure desired resources.\n- **State Management**: Terraform then tracks the current state of your infrastructure with a state file.\n- **Version Control**: Finally, store the configuration files in a version control system to easily version them and share them with other team members.";

const __vite_glob_1_180 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: iacConcept
}, Symbol.toStringTag, { value: 'Module' }));

const implementLogging = "Logging for a distributed system is definitely not a trivial problem to solve. While the actual implementation might change based on your particular tech stack, the main aspects to consider are:\n\n- Keep the structure of all logs consistent and the same throughout your platform. This will ensure that whenever you want to explore them in search for details, you’ll be able to quickly move from one to the other without having to change anything.\n- Centralize them somewhere. It can be an ELK stack, it can be Splunk or any of the many solutions available out there. Just make sure you centralize all your logs so that you can easily interact with all of them when required.\n- Add unique IDs to each request that gets logged, that way you can trace the flow of data from service to service. Otherwise, debugging problems becomes a real issue.\n- Add a tool that helps you search, query, and visualize the logs. After all, that’s why you want to keep track of that information, to use it somehow. Find yourself a UI that works for you and use it to explore your logs.\n";

const __vite_glob_1_181 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: implementLogging
}, Symbol.toStringTag, { value: 'Module' }));

const kubernetesComponents = "There are many components involved, some of them are part of the master node, and others belong to the worker nodes.\n\nHere’s a quick summary:\n\n1. **Master Node Component**s:\n- **API Server**: The front-end for the Kubernetes control plane, handling all RESTful requests for the cluster.\n- **etcd**: A distributed key-value store that holds the cluster's configuration and state.\n- **Controller** Manager: Manages various controllers that regulate the state of the cluster.\n- **Scheduler**: Assigns workloads to different nodes based on resource availability and other constraints.\n2. *Worker Node Components*:\n- **Kubelet**: This is an agent that runs on each node, and it ensures that each container is running in a Pod.\n- **Kube-proxy**: A network proxy that maintains network rules and handles routing for services.\n- **Container Runtime**: This software runs containers, such as Docker, containerd, or CRI-O.\n3. **Additional Components**:\n- **Pods**: These are the smallest deployable units in Kubernetes; they consist of one or more containers.\n- **Services**: Services define a logical set of Pods and a policy for accessing them, they’re often used for load balancing.\n- **ConfigMaps and Secrets**: They manage configuration data and sensitive information, respectively.\n- **Ingress**: It manages external access to services, typically through HTTP/HTTPS.\n- **Namespaces**: They provide a mechanism for isolating groups of resources within a single cluster.";

const __vite_glob_1_182 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: kubernetesComponents
}, Symbol.toStringTag, { value: 'Module' }));

const kubernetesOperators = "As with any piece of software solution, there are no absolutes. In the case of Kubernetes Operators, while they do offer significant benefits for automating and managing complex applications, they also introduce additional complexity and resource requirements.\n\n**Advantages of Kubernetes Operators**:\n\n1. **Automation of Complex Tasks**: Operators automate the management of complex stateful applications, such as databases, reducing the need for manual intervention.\n2. **Consistency**: They help reduce human error and increase reliability by ensuring consistent deployments, scaling, and management of applications across environments.\n3. **Custom Resource Management**: Operators allow you to manage custom resources in Kubernetes, extending its capabilities to support more complex applications and services.\n4. **Simplified Day-2 Operations**: Operators streamline tasks like backups, upgrades, and failure recovery, making it easier to manage applications over time.\n\n**Disadvantages of Kubernetes Operators**:\n\n1. **Complexity**: Developing and maintaining Operators can be complex and require in-depth knowledge of both Kubernetes and the specific application being managed.\n2. **Overhead**: Running Operators adds additional components to your Kubernetes cluster, which can increase resource consumption and operational overhead.\n3. **Limited Use Cases**: Not all applications benefit from the complexity of an Operator; for simple stateless applications, Operators might be overkill.\n4. **Maintenance**: Operators need to be regularly maintained and updated, especially as Kubernetes itself keeps evolving, which can add to the maintenance burden.";

const __vite_glob_1_183 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: kubernetesOperators
}, Symbol.toStringTag, { value: 'Module' }));

const loadBalancer = "![What is a load balancer?](https://assets.roadmap.sh/guest/loadbalancer-working-eytvi.png)\n\nA load balancer is a device or software that distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed.\n\nIt is important because it improves the availability, reliability, and performance of applications by evenly distributing the load, preventing server overload, and providing failover capabilities in case of server failures.\n\nLoad balancers are usually used when scaling up RESTful microservices, as their stateless nature, you can set up multiple copies of the same one behind a load balancer and let it distribute the load amongst all copies evenly.\n";

const __vite_glob_1_184 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: loadBalancer
}, Symbol.toStringTag, { value: 'Module' }));

const microserviceChallenges = "While in theory microservices can solve all platform problems, in practice there are several challenges that you might encounter along the way.\n\nSome examples are:\n\n1. **Complexity**: Managing multiple services increases the overall system complexity, making development, deployment, and monitoring more challenging (as there are more “moving parts”).\n2. **Service Communication**: Ensuring reliable communication between services, handling network latency, and dealing with issues like service discovery and API versioning can be difficult. There are of course alternatives to deal with all of these issues, but they’re not evident right off the bat nor the same for everyone.\n3. **Data Management**: It’s all about trade-offs in the world of distributed computing. Managing data consistency and transactions across distributed services is complex, often requiring techniques like eventual consistency and distributed databases.\n4. **Deployment Overhead**: Coordinating the deployment of multiple services, especially when they have interdependencies, can lead to more complex CI/CD pipelines.\n5. **Monitoring and Debugging**: Troubleshooting issues is harder in a microservices architecture due to the distributed nature of the system. Trying to figure out where the information goes and which services are involved in a single request can be quite a challenge for large platforms. This makes debugging microservices architecture a real headache.\n6. **Security**: Securing microservices involves managing authentication, authorization, and data protection across multiple services, often with varying security requirements.";

const __vite_glob_1_185 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: microserviceChallenges
}, Symbol.toStringTag, { value: 'Module' }));

const microserviceVsMonolithic = "![Microservice vs Monolithic](https://assets.roadmap.sh/guest/microservice-vs-monolith-2og84.png)\n\nA microservice is an architectural style that structures an application as a collection of small, loosely coupled, and independently deployable services (hence the term “micro”).\n\nEach service focuses on a specific business domain and can communicate with others through well-defined APIs.\n\nIn the end, your application is not (usually) composed of a single microservice (that would make it monolith), instead, its architecture consists of multiple microservices working together to serve the incoming requests.\n\nOn the other hand, a monolithic application is a single (often massive) unit where all functions and services are interconnected and run as a single process.\n\nThe biggest difference between monoliths and microservices is that changes to a monolithic application require the entire system to be rebuilt and redeployed, while microservices can be developed, deployed, and scaled independently, allowing for greater flexibility and resilience.\n";

const __vite_glob_1_186 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: microserviceVsMonolithic
}, Symbol.toStringTag, { value: 'Module' }));

const migrateEnvironment = "To migrate an existing application into a containerized environment, you’ll need to adapt the following steps to your particular context:\n\n1. Figure out what parts of the application need to be containerized together.\n2. Create your Dockerfiles and define the entire architecture in that configuration, including the interservice dependencies that there might be.\n3. Figure out if you also need to containerize any external dependency, such as a database. If you do, add that to the Dockerfile.\n4. Build the actual Docker image.\n5. Once you make sure it runs locally, configure the orchestration tool you use to manage the containers.\n6. You’re now ready to deploy to production, however, make sure you keep monitoring and alerting on any problem shortly after the deployment in case you need to roll back.\n";

const __vite_glob_1_187 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: migrateEnvironment
}, Symbol.toStringTag, { value: 'Module' }));

const multiCloudKubernetes = "The process is pretty much the same as it was described above, with an added step to set up the actual Kubernetes cluster:\n\nUse Terraform to define and provision Kubernetes clusters in each cloud. For instance, create an EKS cluster on AWS, an AKS cluster on Azure, and a GKE cluster on Google Cloud, specifying configurations such as node types, sizes, and networking.\n\nOnce you’re ready, make sure to set up the Kubernetes auto-scaler on each of the cloud providers to manage resources and scale based on the load they receive.\n";

const __vite_glob_1_188 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: multiCloudKubernetes
}, Symbol.toStringTag, { value: 'Module' }));

const multiCloud = "Setting up a multi-cloud infrastructure using Terraform involves the following steps:\n\n1. **Define Providers**: In your Terraform configuration files, define the providers for each cloud service you intend to use (e.g., AWS, Azure, Google Cloud). Each provider block will configure how Terraform interacts with that specific cloud.\n2. **Create Resource Definitions**: In the same or separate Terraform files, define the resources you want to provision in each cloud. For example, you might define AWS EC2 instances, Azure Virtual Machines, and Google Cloud Storage buckets within the same project.\n3. **Set Up State Management**: Use a remote backend to manage Terraform state files centrally and securely. This is crucial for multi-cloud setups to ensure consistency and to allow collaboration among team members.\n4. **Configure Networking**: Design and configure networking across clouds, including VPCs, subnets, VPNs, or peering connections, to enable communication between resources in different clouds.\n5. **Provision Resources**: Run terraform init to initialize the configuration, then terraform plan to preview the changes, and finally terraform apply to provision the infrastructure across the multiple cloud environments.\n6. **Handle Authentication**: Ensure that each cloud provider's authentication (e.g., access keys, service principals) is securely handled, possibly using environment variables or a secret management tool. Do not hardcode sensitive information in your code, ever.\n7. **Monitor and Manage**: As always, after deploying, use Terraform's state files and output to monitor the infrastructure.";

const __vite_glob_1_189 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: multiCloud
}, Symbol.toStringTag, { value: 'Module' }));

const networkConfiguration = "Managing the network configuration is not a trivial task, especially when the architecture is big and complex.\n\n- Specifically in a cloud environment, managing network configurations involves several steps:\nCreating and isolating resources within Virtual Private Clouds (VPCs), organizing them into subnets, and controlling traffic using security groups and network ACLs. \n- Set up load balancers to distribute traffic for better performance, while setting up DNS services at the same time to manage domain routing. \n- Have VPNs and VPC peering connect cloud resources securely with other networks. \n- Finally, [automation tools](https://roadmap.sh/devops/automation-tools) like Terraform handle network setups consistently, and monitoring tools ensure everything runs smoothly.\n";

const __vite_glob_1_190 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: networkConfiguration
}, Symbol.toStringTag, { value: 'Module' }));

const optimizeCicd = "There are many ways in which you can optimize a CI/CD pipeline for performance and reliability, it all depends highly on the tech stack and your specific context (your app, your CI/CD setup, etc). However, the following are some potential solutions to this problem:\n\n1. **Parallelize Jobs**: As long as you can, try to run independent jobs in parallel to reduce overall build and test times. This ensures faster feedback and speeds up the entire pipeline.\n2. **Optimize Build Caching**: Use caching mechanisms to avoid redundant work, such as re-downloading dependencies or rebuilding unchanged components. This can significantly reduce build times.\n3. **Incremental Builds**: Implement incremental builds that only rebuild parts of the codebase that have changed, rather than the entire project. This is especially useful for large projects with big codebases.\n4. **Efficient Testing**: Prioritize and parallelize tests, running faster unit tests early and reserving more intensive integration or end-to-end tests for later stages. Be smart about it and use test impact analysis to only run tests affected by recent code changes.\n5. **Monitor Pipeline Health**: Continuously monitor the pipeline for bottlenecks, failures, and performance issues. Use metrics and logs to identify and address inefficiencies.\n6. **Environment Consistency**: Ensure that build, test, and production environments are consistent to avoid \"It works on my machine\" issues. Use containerization or Infrastructure as Code (IaC) to maintain environment parity. Your code should work in all environments, and if it doesn’t, it should not be the fault of the environment.\n7. **Pipeline Stages**: Use pipeline stages wisely to catch issues early. For example, fail fast on linting or static code analysis before moving on to more resource-intensive stages.\n";

const __vite_glob_1_191 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: optimizeCicd
}, Symbol.toStringTag, { value: 'Module' }));

const orchestration = "Orchestration in DevOps refers to the automated coordination and management of complex IT systems. It involves combining multiple automated tasks and processes into a single workflow to achieve a specific goal.\n\nNowadays, automation (or orchestration) is one of the key components of any software development process and it should never be avoided nor preferred over manual configuration.\n\nAs an automation practice, orchestration helps to remove the chance of human error from the different steps of the software development lifecycle. This is all to ensure efficient resource utilization and consistency.\n\nSome examples of orchestration can include orchestrating container deployments with Kubernetes and automating infrastructure provisioning with tools like Terraform.\n";

const __vite_glob_1_192 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: orchestration
}, Symbol.toStringTag, { value: 'Module' }));

const popularCicdTools = "There are too many out there to name them all, but we can group them into two main categories: on-prem and cloud-based.\n\n**On-prem CI/CD tools**\n\nThese tools allow you to install them on your own infrastructure and don’t require any extra external internet access. Some examples are:\n\n- Jenkins\n- GitLab CI/CD (can be self-hosted)\n- Bamboo\n- TeamCity\n\n**Cloud-based CI/CD tools**\n\nOn the other hand, these tools either require you to use them from the cloud or are only accessible in SaaS format, which means they provide the infrastructure, and you just use their services.\n\nSome examples of these tools are:\n\n- CircleCI\n- Travis CI\n- GitLab CI/CD (cloud version)\n- Azure DevOps\n- Bitbucket Pipelines\n";

const __vite_glob_1_193 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: popularCicdTools
}, Symbol.toStringTag, { value: 'Module' }));

const purposeOfCm = "When organizations and platforms grow large enough, keeping track of how different areas of the IT ecosystem (infrastructure, deployment pipelines, hardware, etc) are meant to be configured becomes a problem, and finding a way to manage that chaos suddenly becomes a necessity.\nThat is where configuration management comes into play.\n\nThe purpose of a configuration management tool is to automate the process of managing and maintaining the consistency of software and hardware configurations across an organization's infrastructure.\n\nIt makes sure that systems are configured correctly, updates are applied uniformly, and configurations are maintained according to predefined standards.\n\nThis helps reduce configuration errors, increase efficiency, and ensure that environments are consistent and compliant.";

const __vite_glob_1_194 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: purposeOfCm
}, Symbol.toStringTag, { value: 'Module' }));

const reverseProxy = "![Reverse Proxy Explained](https://assets.roadmap.sh/guest/reverse-proxy-explained-t12iw.png)\n\nA reverse proxy is a piece of software that sits between clients and backend servers, forwarding client requests to the appropriate server and returning the server's response to the client. It helps with load balancing, security, caching, and handling SSL termination.\n\nAn example of a reverse proxy is **Nginx**. For example, if you have a web application running on several backend servers, Nginx can distribute incoming HTTP requests evenly among these servers. This setup improves performance, enhances fault tolerance, and ensures that no single server is overwhelmed by traffic.\n";

const __vite_glob_1_195 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: reverseProxy
}, Symbol.toStringTag, { value: 'Module' }));

const roleOfDevops = "This is probably one of the most common DevOps interview questions out there because by answering it correctly, you show that you actually know what DevOps engineers (A.K.A “you”) are supposed to work on.\n\nThat said, this is not a trivial question to answer because different companies will likely implement DevOps with their own “flavor” and in their own way.\n\nAt a high level, the role of a DevOps engineer is to bridge the gap between development and operations teams with the aim of improving the development lifecycle and reducing deployment errors.\n\nWith that said other key responsibilities may include:\n\n- Implementing and managing CI/CD pipelines.\n- Automating infrastructure provisioning and configuration using IaC tools.\n- Monitoring and maintaining system performance, security, and availability.\n- Collaborating with developers to streamline code deployments and ensures smooth operations.\n- Managing and optimizing cloud infrastructure.\n- Ensuring system scalability and reliability.\n- Troubleshooting and resolving issues across the development and production environments.\n";

const __vite_glob_1_196 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: roleOfDevops
}, Symbol.toStringTag, { value: 'Module' }));

const scalingDifferences = "![Vertical vs Horizontal Scaling](https://assets.roadmap.sh/guest/vertical-scaling-vs-horizontal-scaling-dfy6m.png)\n\nThey’re both valid scaling techniques, but they both have different limitations on the affected system.\n\n**Horizontal Scaling**\n\n- Involves adding more machines or instances to your infrastructure.\n- Increases capacity by connecting multiple hardware or software entities so they work as a single logical unit.\n- Often used in distributed systems and cloud environments.\n\n**Vertical Scaling**\n\n- Involves adding more resources (CPU, RAM, storage) to an existing machine.\n- Increases capacity by enhancing the power of a single server or instance.\n- Limited by the maximum capacity of the hardware.\n\nIn summary, horizontal scaling adds more machines to handle increased load, while vertical scaling enhances the power of existing machines.\n";

const __vite_glob_1_197 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: scalingDifferences
}, Symbol.toStringTag, { value: 'Module' }));

const secretManagement = "There are many ways to handle secrets management in a DevOps pipeline, some of them involve:\n\n- Storing secrets in environment variables managed by the CI/CD tool.\n- Using secret management tools like HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault to securely store and retrieve secrets. \n- Encrypted configuration files are also an option, with decryption keys stored securely somewhere else. \n- Whatever strategy you decide to go with, it's crucial to implement strict access controls and permissions, integrate secret management tools with CI/CD pipelines to fetch secrets securely at runtime, and above all, avoid hardcoding secrets in code repositories or configuration files.\n";

const __vite_glob_1_198 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: secretManagement
}, Symbol.toStringTag, { value: 'Module' }));

const serverlessComputing = "Contrary to popular belief, serverless computing doesn’t mean there are no servers, in fact, there are, however, you just don’t need to worry about them.\n\nServerless computing is a cloud computing model where the cloud provider automatically manages the infrastructure, allowing developers to focus solely on writing and deploying code. In this model, you don't have to manage servers or worry about scaling, as the cloud provider dynamically allocates resources as needed.\n\nOne of the great qualities of this model is that you pay only for the compute time your code actually uses, rather than for pre-allocated infrastructure (like you would for a normal server).\n";

const __vite_glob_1_199 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: serverlessComputing
}, Symbol.toStringTag, { value: 'Module' }));

const statefulApplications = "Handling stateful applications in a Kubernetes environment requires careful management of persistent data; you need to ensure that data is retained even if Pods are rescheduled or moved.\n\nHere’s one way you can do it:\n\n1. **Persistent Volumes (PVs) and Persistent Volume Claims (PVCs)**: Use Persistent Volumes to define storage resources in the cluster, and Persistent Volume Claims to request specific storage. This way you decouple storage from the lifecycle of Pods, ensuring that data persists independently of Pods.\n2. **StatefulSets**: Deploy stateful applications using StatefulSets instead of Deployments. StatefulSets ensure that Pods have stable, unique network identities and persistent storage, which is crucial for stateful applications like databases.\n3. **Storage Classes**: Use Storage Classes to define the type of storage (e.g., SSD, HDD) and the dynamic provisioning of Persistent Volumes. This allows Kubernetes to automatically provision the appropriate storage based on the application's needs.\n4. **Headless Services**: Configure headless services to manage network identities for StatefulSets. This allows Pods to have consistent DNS names, which is important for maintaining stateful connections between Pods.\n5. **Backup and Restore**: Implement backup and restore mechanisms to protect the persistent data. Tools like Velero can be used to back up Kubernetes resources and persistent volumes.\n6. **Data Replication**: For critical applications, set up data replication across multiple zones or regions to ensure high availability and data durability.\n\nAs always, continuously monitor the performance and health of stateful applications using Kubernetes-native tools (e.g., Prometheus) and ensure that the storage solutions meet the performance requirements of the application.";

const __vite_glob_1_200 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: statefulApplications
}, Symbol.toStringTag, { value: 'Module' }));

const whatIsDevops = "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). Its main goal is to shorten (and simplify) the software development lifecycle and provide continuous delivery with high software quality. \n\nIt is important because it helps to improve collaboration between development and operations teams which in turn, translates into increasing deployment frequency, reducing failure rates of new releases, and speeding up recovery time. \n";

const __vite_glob_1_201 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: whatIsDevops
}, Symbol.toStringTag, { value: 'Module' }));

const whatIsDocker = "Docker is an open-source platform that enables developers to create, deploy, and run applications within lightweight, portable containers. These containers package an application along with all of its dependencies, libraries, and configuration files.\n\nThat, in turn, ensures that the application can run consistently across various computing environments.\n\nDocker has become one of the most popular [DevOps tools](https://roadmap.sh/devops/tools) because it provides a consistent and isolated environment for development, continuous testing, and deployment. This consistency helps to eliminate the common \"It works on my machine\" problem by ensuring that the application behaves the same way, regardless of where it is run—whether on a developer's local machine, a testing server, or in production.\n\nAdditionally, Docker simplifies the management of complex applications by allowing developers to break them down into smaller, manageable microservices, each running in its own container.\n\nThis approach not only supports but also enhances scalability, and flexibility and it makes it easier to manage dependencies, version control, and updates.\n";

const __vite_glob_1_202 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: whatIsDocker
}, Symbol.toStringTag, { value: 'Module' }));

const whatIsGitops = "GitOps is a practice that uses Git as the single source of truth for infrastructure and application management. It takes advantage of Git repositories to store all configuration files and through automated processes, it ensures that both infrastructure and application configuration match the described state in the repo.\n\nThe main differences between GitOps and traditional CI/CD are:\n\n- **Source of Truth**: GitOps uses Git as the single source of truth for both infrastructure and application configurations. In traditional CI/CD, configurations may be scattered across various tools and scripts.\n- **Deployment Automation**: In GitOps, changes are automatically applied by reconciling the desired state in Git with the actual state in the environment. Traditional CI/CD often involves manual steps for deployment.\n- **Declarative Approach**: GitOps emphasizes a declarative approach where the desired state is defined in Git and the system automatically converges towards it. Traditional CI/CD often uses imperative scripts to define steps and procedures to get the system to the state it should be in.\n- **Operational Model**: GitOps operates continuously, monitoring for changes in Git and applying them in near real-time. Traditional CI/CD typically follows a linear pipeline model with distinct build, test, and deploy stages.\n- **Rollback and Recovery**: GitOps simplifies rollbacks and recovery by reverting changes in the Git repository, which is a native mechanism and automatically triggers the system to revert to the previous state. Traditional CI/CD may require extra work and configuration to roll back changes.";

const __vite_glob_1_203 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: whatIsGitops
}, Symbol.toStringTag, { value: 'Module' }));

const whatIsHelmChart = "A Helm chart is a set of YAML templates used to configure Kubernetes resources. It simplifies the deployment and management of applications within a Kubernetes cluster by bundling all necessary components (such as deployments, services, and configurations) into a single, reusable package.\n\nHelm charts are used in Kubernetes to:\n\n- **Simplify Deployments**: By using Helm charts, you can deploy complex applications with a single command.\n- **Version Control**: Given how they’re just plain-text files, helm charts support versioning, allowing you to track and roll back to previous versions of your applications easily.\n- **Configuration Management**: They allow you to manage configuration values separately from the Kubernetes manifests, making it easier to update and maintain configurations.\n- **Reuse and Share**: Helm charts can be reused and shared across different projects and teams, promoting best practices and consistency.";

const __vite_glob_1_204 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: whatIsHelmChart
}, Symbol.toStringTag, { value: 'Module' }));

const whatIsIac = "![Explain Infrastructure as Code](https://assets.roadmap.sh/guest/infrastructure-as-code-explained-4dpxm.png)\n\nIaC is the practice of managing and provisioning infrastructure through machine-readable configuration files (in other words, “code”), rather than through physical hardware configuration or interactive configuration tools. \n\nBy keeping this configuration in code format, we now gain the ability to keep it stored in version control platforms, and automate their deployment consistently across environments, reducing the risk of human error and increasing efficiency in infrastructure management.\n";

const __vite_glob_1_205 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: whatIsIac
}, Symbol.toStringTag, { value: 'Module' }));

const whatIsKubernetes = "![What is Kubernetes](https://assets.roadmap.sh/guest/kubernetes-logo-with-docker-4f0q6.png)\n\nIf we’re talking about DevOps tools, then Kubernetes is a must-have. Specifically, Kubernetes is an open-source container orchestration platform. That means it can automate the deployment, scaling, and management of containerized applications.\n\nIt is widely used because it simplifies the complex tasks of managing containers for large-scale applications, such as ensuring high availability, load balancing, rolling updates, and self-healing.\n\nKubernetes helps organizations run and manage applications more efficiently and reliably in various environments, including on-premises, cloud, or hybrid setups.\n";

const __vite_glob_1_206 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: whatIsKubernetes
}, Symbol.toStringTag, { value: 'Module' }));

const whatIsPrometheus = "As a DevOps engineer, knowing your tools is key, given how many are out there, understanding  which ones get the job done is important.\n\nIn this case, Prometheus is an open-source monitoring and alerting tool designed for reliability and scalability. It is widely used to monitor applications and infrastructure by collecting metrics, storing them in a time-series database, and providing powerful querying capabilities.\n";

const __vite_glob_1_207 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: whatIsPrometheus
}, Symbol.toStringTag, { value: 'Module' }));

const whatIsRollback = "A rollback is the process of reverting a system to a previous stable state, typically after a failed or problematic deployment to production.\n\nYou would perform a rollback when a new deployment causes one or several of the following problems: application crashes, significant bugs, security vulnerabilities, or performance problems.\n\nThe goal is to restore the system to a known “good” state while minimizing downtime and the impact on users while investigating and resolving the issues with the new deployment.\n";

const __vite_glob_1_208 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: whatIsRollback
}, Symbol.toStringTag, { value: 'Module' }));

const whatIsServiceMesh = "![What is a Service Mesh?](https://assets.roadmap.sh/guest/service-mesh-vs-normal-microservices-dns8i.png)\n\nA service mesh is a dedicated layer in a system’s architecture for handling service-to-service communication.\n\nThis is a very common problem to solve when your microservice-based architecture grows out of control. Suddenly having to understand how to orchestrate them all in a way that is reliable and scalable becomes more of a chore.\n\nWhile teams can definitely come up with solutions to this problem, using a ready-made solution is also a great alternative.\n\nA service mesh manages tasks like load balancing, service discovery, encryption, authentication, authorization, and observability,  without requiring changes to the application code (so it can easily be added once the problem presents, instead of planning for it from the start).\n\nThere are many products out there that provide this functionality, but some examples are Istio, Linkerd, and Consul.\n";

const __vite_glob_1_209 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: whatIsServiceMesh
}, Symbol.toStringTag, { value: 'Module' }));

const whatIsShiftLeft = "The concept of '[shift left](https://roadmap.sh/devops/shift-left-testing)' in DevOps refers to the practice of performing tasks earlier in the software development lifecycle.\n\nThis includes integrating testing, security, and other quality checks early in the development process rather than at the end. The goal is to identify and fix issues sooner, thus reducing defects, improving quality, and speeding up software delivery times.\n";

const __vite_glob_1_210 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: whatIsShiftLeft
}, Symbol.toStringTag, { value: 'Module' }));

const whatIsVersionControl = "Version control is a system that records changes to files over time so that specific versions can be recalled later or multiple developers can work on the same codebase and eventually merge their work streams together with minimum effort.\n\nIt is important in DevOps because it allows multiple team members to collaborate on code, tracks and manages changes efficiently, enables rollback to previous versions if issues arise, and supports automation in CI/CD pipelines, ensuring consistent and reliable software delivery (which is one of the key principles of DevOps).\n\nIn terms of tooling, one of the best and most popular version control systems is Git. It provides what is known as a distributed version control system, giving every team member a piece of the code so they can branch it, work on it however they feel like it, and push it back to the rest of the team once they’re done.\n\nThat said, there are other legacy teams using alternatives like CVS or SVN.\n";

const __vite_glob_1_211 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: whatIsVersionControl
}, Symbol.toStringTag, { value: 'Module' }));

const zeroDowntime = "Zero-downtime deployments are crucial to maintain the stability of service with high-traffic applications. To achieve this, there are many different strategies, some of which we’ve already covered in this article.\n\n1. **Blue-Green Deployment**: Set up two identical environments—blue (current live) and green (new version). Deploy the new version to the green environment, test it, and then switch traffic from blue to green. This ensures that users experience no downtime.\n2. **Canary Releases**: Gradually route a small percentage of traffic to the new version while the rest continues to use the current version. Monitor the new version's performance, and if successful, progressively increase the traffic to the new version.\n3. **Rolling Deployments**: Update a subset of instances or Pods at a time, gradually rolling out the new version across all servers or containers. This method ensures that some instances remain available to serve traffic while others are being updated.\n4. **Feature Flags**: Deploy the new version with features toggled off. Gradually enable features for users without redeploying the code. This allows you to test new features in production and quickly disable them if issues arise.";

const __vite_glob_1_212 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: zeroDowntime
}, Symbol.toStringTag, { value: 'Module' }));

const asyncOpsJs = "There are 4 main ways in which JavaScript allows developers to handle asynchronous calls. In the end, the result is always the same, but the final structure of the code and the way to reason about it is considerably different.\n\n- **Callbacks**. They allow you to set up a function to be called directly once the asynchronous operation is done.\n- **Promises**. Promises represent the eventual completion of an asynchronous operation, and they provide a simpler and more intuitive syntax to specify callbacks to be called on success and failure of the operation.\n- **Async/Await**. The final evolution of the promises syntax. It’s mainly syntactic sugar, but it makes asynchronous code look synchronous, which in turn makes it a lot easier to read and reason about.\n- **Event listeners**. Event listeners are callbacks that get triggered when specific events are fired (usually due to user interactions).\n";

const __vite_glob_1_213 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: asyncOpsJs
}, Symbol.toStringTag, { value: 'Module' }));

const blockInlineElems = "In CSS, the difference between **inline**, **inline-block**, and **block** elements is on the way they’re rendered in the web page:\n\n- **Inline**: Inline elements don’t have a width or height. Instead, they don’t start on a new line and take up only the width that’s required (based on their content). Examples: &lt;span&gt;, &lt;a&gt;.\n- **Inline-block**: Just like inline elements, here the DOM elements do not start on a new line, however, they do allow you to set a height and width on them. Example: &lt;img&gt;.\n- **Block**: Elements start on a new line, taking up the full width available by default. Their width and height can be set by you. Examples: &lt;div&gt;, &lt;p&gt;.\n";

const __vite_glob_1_214 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: blockInlineElems
}, Symbol.toStringTag, { value: 'Module' }));

const boxModel = "The CSS box model describes the rectangular boxes generated for elements in the DOM. The box model is composed of the following layers:\n\n1. **Content**: The innermost part, where text and images appear.\n2. **Padding**: The space between the content and the border.\n3. **Border**: The outer edge of the padding, surrounding the element.\n4. **Margin:** The space outside the border, separating the element from others.\n\nBy controlling each layer individually, you can define the look of each element in the user interface.\n";

const __vite_glob_1_215 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: boxModel
}, Symbol.toStringTag, { value: 'Module' }));

const browserRender = "The process of rendering a web page in the browser involves several steps:\n\n1. Parsing the HTML.\n2. Parsing the CSS and applying styles.\n3. Calculating the position of each element in the layout of the page.\n4. Painting the actual pixels in the screen, while at the same time sorting them into layers.\n5. Composing all layers together, to render the website on screen. This step is taking into account z-index values, opacity values and more.\n6. Running JavaScript code.\n7. Loading the asynchronous resources.\n";

const __vite_glob_1_216 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: browserRender
}, Symbol.toStringTag, { value: 'Module' }));

const clientStorage = "**Cookies** are small pieces of data stored in web browsers. They are mainly used for keeping information between HTTP requests, such as user authentication, session management, and tracking user behavior\n\nOn the other hand, **sessionStorage** is designed for temporary storage and is accessible only within the same session (i.e.., while the browser window or tab is open). Data stored in sessionStorage is lost when the browser window is closed.\n\nFinally, **localStorage** is similar to **sessionStorage** but persists even when the browser window or tab is closed and reopened. It provides long-term storage for web applications. They are very similar to cookies, however, the size limitations on localStorage are quite big compared to cookies, making it a much better alternative when storing large datasets.\n";

const __vite_glob_1_217 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: clientStorage
}, Symbol.toStringTag, { value: 'Module' }));

const closures = "When a function is defined within another function, it retains access to the variables and parameters of the outer function, even after the outer function has finished executing. That link, between the inner function and its scope inside the outer function is known as “closure”\n\nYou can use them to create private variables that can only be accessed by the inner function, you can even use them to create complex objects with access to a rich context that is only available globally to them.";

const __vite_glob_1_218 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: closures
}, Symbol.toStringTag, { value: 'Module' }));

const criticalCss = "Remove the CSS rules from the CSS files and inline them into the main “&lt;head&gt;” element of your website.\n\nBy doing it like this, you remove the loading time of that code, as it loads immediately once the main file loads. The rest, the non-critical rules, can be loaded once the main resource loads (the main CSS file).\n";

const __vite_glob_1_219 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: criticalCss
}, Symbol.toStringTag, { value: 'Module' }));

const csp = "Content Security Policy (CSP) is a security standard that helps to avoid cross-site scripting (XSS) attacks and other code injection attacks by defining and enforcing a whitelist of approved sources, such as scripts, stylesheets, images, and other resources.\n\nThe main benefits are:\n\n- **Better Security**: CSP helps protect websites and web apps against various types of attacks, including XSS and data injection.\n- **More Contro**l: Developers can define fine-grained policies to control the sources from which content can be loaded.\n- **Improved Compliance**: Helps meet security compliance requirements, such as those outlined in OWASP Top 10.";

const __vite_glob_1_220 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: csp
}, Symbol.toStringTag, { value: 'Module' }));

const cssGrid = "To create a grid layout, you have to first specify the “display:grid” property on the containing element, and then define the structure of the grid, by using the “grid-template-rows” and “grid-template-columns” properties.\n\nNow simply place the elements inside the grid container and specify the “grid-column” or “grid-row” properties.\n";

const __vite_glob_1_221 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cssGrid
}, Symbol.toStringTag, { value: 'Module' }));

const cssSpecificity = "CSS specificity is used to determine which set of styles to apply on any given element when there are overlapping styles (like several rules setting the font-size of the same element).\n\nThe way it works is by applying the following order of precedence:\n\n1. First, any inline style will override any other style.\n2. Second, any ID-based style will override anything but inline styles.\n3. Third, class-based selectors will override anything but inline and ID-based styles.\n4. Finally, type selectors can be overridden by any other type of selectors.\n";

const __vite_glob_1_222 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cssSpecificity
}, Symbol.toStringTag, { value: 'Module' }));

const cssVariables = "Just like variables in [frontend programming languages](https://roadmap.sh/frontend/languages), CSS variables can be set by developers and reused across the entire CSS stylesheets. They’re great for centralizing global values that are used throughout the web site’s code.\n\nThey’re also heavily used by CSS frameworks to set constants such as the value of colors (i.e. “black” being “#222” instead of “000”.)\n";

const __vite_glob_1_223 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cssVariables
}, Symbol.toStringTag, { value: 'Module' }));

const dom$1 = "The Document Object Model (DOM) is an API for web documents. It represents the structure of an HTML web page as a tree of nodes, where each node corresponds to a part of the document (i.e. an element, an attribute, or text).\n";

const __vite_glob_1_224 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dom$1
}, Symbol.toStringTag, { value: 'Module' }));

const emVsRem = "![EM vs REM in CSS](https://assets.roadmap.sh/guest/em-vs-rem-css-jwgx8.png)\n\nThey’re both relative units of measurement, however, they’re relative to different things:\n\n1. **“em”** units are relative to the font size of their parent element. So if the parent element has a font size of 20px, then setting a “2em” font size, would equal to 40px.\n2. **“rem”** units are “root em”, which means they’re relative to the web page’s root element (the “&lt;html&gt;” element).\n";

const __vite_glob_1_225 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: emVsRem
}, Symbol.toStringTag, { value: 'Module' }));

const eventDelegation = "Event delegation is a technique where you define an event handler for a particular event as part of the parent element that contains the elements that will actually trigger the event.\n\n![Event Delegation in JavaScript](https://assets.roadmap.sh/guest/event-delegation-explained-5e2vt.png)\n\nWhen the event is triggered, it’ll bubble up in the DOM hierarchy until it reaches the parent’s event handler.\n";

const __vite_glob_1_226 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: eventDelegation
}, Symbol.toStringTag, { value: 'Module' }));

const eventListeners = "To add an event listener on an element, you have to first “get” that element through one of the many methods of the document object (i.e. getElementById, etc) and then use the addEventListener method of the obtained object.\n\nThe method will receive the event name (i.e. ‘click’, ‘keyup’, ‘mouseup’, etc), the event handler function and, optionally, a boolean indicating whether the event should be captured during the capturing phase.";

const __vite_glob_1_227 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: eventListeners
}, Symbol.toStringTag, { value: 'Module' }));

const eventLoopJs = "The event loop is a core concept in JavaScript, and it allows for the execution of asynchronous code.\n\n![Event loop in JavaScript](https://assets.roadmap.sh/guest/javascript-event-loop-explained-d92hx.png)\n\nThe way it works, is as follows:\n\n1. **Call Stack**: JavaScript executes your code on a single thread using a call stack, where function calls are added and executed one by one. When a function ends, it's removed from the stack.\n2. **Async calls**: For asynchronous operations, JavaScript uses Web APIs provided by the browser. These operations are offloaded from the call stack and handled separately.\n3. **Tasks Queue**: Once an asynchronous call is done, its callback is placed in the task queue.\n4. **Event Loop**: The event loop constantly checks the call stack and the task queue. If the call stack is empty, it takes the first task from the queue and pushes it onto the call stack for execution. This cycle repeats indefinitely.\n";

const __vite_glob_1_228 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: eventLoopJs
}, Symbol.toStringTag, { value: 'Module' }));

const flexboxLayout = "To create a flexbox layout, you have to take care of 2 main steps:\n\n1. Set up the container element by applying the “display:flexbox” CSS property to it.\n2. Set up the flexbox properties for each element inside the container (something like “flex:1” would suffice).\n";

const __vite_glob_1_229 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: flexboxLayout
}, Symbol.toStringTag, { value: 'Module' }));

const idVsClass = "An **id** is a unique identifier for a single HTML element. A **class** is a reusable identifier that can be applied to multiple elements.\n\n![ID vs Class in HTML](https://assets.roadmap.sh/guest/css-classes-vs-id-example-9ufsl.png)\n\nYou’d want to use an **id** when you need to address a single element either through CSS or JavaScript. And you’ll want to use a **class** when you need to address a group of DOM elements.\n\nIn CSS:\n\n- **#id** selects a specific element with that id.\n- **.class** selects all elements with that class.\n";

const __vite_glob_1_230 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: idVsClass
}, Symbol.toStringTag, { value: 'Module' }));

const improveWebPerf = "The main set of metrics to monitor for web apps are:\n\n1. First Contentful Paint (FCP): Time until the first piece of content is rendered.\n2. Largest Contentful Paint (LCP): Time until the largest content element is rendered.\n3. Time to Interactive (TTI): Time until the page is fully interactive.\n4. Total Blocking Time (TBT): Total time during which the main thread is blocked.\n5. Cumulative Layout Shift (CLS): Measures visual stability.\n";

const __vite_glob_1_231 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: improveWebPerf
}, Symbol.toStringTag, { value: 'Module' }));

const jsPromises = "Promises are JavaScript objects that represent the eventual completion of an asynchronous call. Through promises you’re able to handle the successful or failed execution of the asynchronous call.";

const __vite_glob_1_232 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: jsPromises
}, Symbol.toStringTag, { value: 'Module' }));

const mediaQueries = "Media queries are a feature in CSS that allow Front End developers to apply different styles to a document based on various characteristics of the device or viewport. For example, you can set different styles based on the device’s width, height, orientation, or type.\n\nThrough media queries we can achieve responsive design allowing styles to adapt to different screen sizes and device capabilities.\n";

const __vite_glob_1_233 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: mediaQueries
}, Symbol.toStringTag, { value: 'Module' }));

const nullVsUndefined = "In JavaScript, “undefined” is the default value new variables take, and it means the variable has been defined but it hasn’t been assigned any value just yet.\n\nAnd “null” is actually a value that signals “no value” or “no object”, it is specifically assigned to the variable by the developer.";

const __vite_glob_1_234 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: nullVsUndefined
}, Symbol.toStringTag, { value: 'Module' }));

const optimizeAssets = "There are different techniques to improve loading times, depending on the asset type, for example:\n\n- CSS & JavaScript files should be minimized and compressed.\n- Images can be compressed when you’re saving them or through the use of specialized software, like [JPEGOptim](https://github.com/tjko/jpegoptim) or [ImageOptim](https://imageoptim.com/mac). Just make sure you don’t lose any quality during the process.";

const __vite_glob_1_235 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: optimizeAssets
}, Symbol.toStringTag, { value: 'Module' }));

const sameOriginPolicy = "The same-origin policy is a security feature in browsers designed to prevent a web site from accessing data (like importing a script, or sending a request to an API) from another site.\n\nThis policy helps protect users from malicious scripts that try to steal sensitive data from other websites, such as cookies, local storage, or content\n\nA way to overcome this limitation is through CORS (Cross-Origin Resource Sharing). As long as the server specifies which domain it can receive requests from, and the client app sends the right headers, they will be able to interact with each other, even if they’re not in the same domain.";

const __vite_glob_1_236 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sameOriginPolicy
}, Symbol.toStringTag, { value: 'Module' }));

const seoBestPractices = "Purely from the HTML side:\n\n- **Use Semantic HTML**: Use tags like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, and &lt;footer&gt; to provide meaningful structure.\n- **Proper Heading Hierarchy**: Use headings (&lt;h1&gt; to &lt;h6&gt;) correctly, making sure &lt;h1&gt; is used once per page for the main title, followed by &lt;h2&gt;, &lt;h3&gt;, etc.\n- **Meta Tags**: Include relevant &lt;meta&gt; tags, such as description, keywords, and viewport, to provide metadata about the website.\n- **Alt Attributes on images**: Use alt attributes for images to describe the content, improving accessibility and search engine understanding.\n\nOn top of that:\n\n- **Internal Linking**: Make sure to use internal links to connect content within your web site, helping search engines crawl and understand the site structure.\n- **Mobile-Friendly Design**: Code your site and CSS with a mobile-first mindset. Ensuring the site is responsive and mobile-friendly to improve user experience and ranking on search engines.\n- **Fast Loading Times**: Try to optimize images, use efficient code, and leverage caching to improve page load speeds. The faster the page loads, the bigger the advantage it’ll have against other similar results on the SERP.\n";

const __vite_glob_1_237 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: seoBestPractices
}, Symbol.toStringTag, { value: 'Module' }));

const serviceWorkers = "Service workers are scripts that run in the background of a web application, separate from the web page’s main thread, and provide features like offline caching, push notifications, and background synchronization.";

const __vite_glob_1_238 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: serviceWorkers
}, Symbol.toStringTag, { value: 'Module' }));

const ssrWhen = "Server-side rendering (SSR) is a technique in which a web server generates the HTML content of a web page and sends it to the client (usually a web browser) as a fully rendered document. This is the opposite of what naturally happens with client-side rendering (CSR), where the browser downloads a minimal HTML page and then uses JavaScript to render the content dynamically.\n\nThere are several ideal use cases for SSR:\n\n- **Content-rich websites**. For example, news sites, blogs, etc.\n- **SEO-heavy applications**. When the success of the web app relies on SEO, this approach can greatly improve the performance of the site (and because of that, the SEO performance).\n- **Progressive web applications**. When the application needs to render fast to provide a fast and performance user experience, the application can initially be rendered on the server, and then hydrated on the client for subsequent integrations.\n";

const __vite_glob_1_239 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: ssrWhen
}, Symbol.toStringTag, { value: 'Module' }));

const stateMgmtSpa = "Without a full framework or library like React or Vue.js, properly handling state management is not a trivial task.\n\nSome options available through the language itself are:\n\n- **Global Variables**: You can use global variables, or perhaps a global object to centralize state. The problem with this approach is that it can become quite unmanageable for large applications. It’s also a lot harder to maintain local state inside single components.\n- **Module Pattern**: You can use this pattern to encapsulate state and provide a clear API to manage it. You would have to instantiate local instances of these modules for individual components.\n- **Pub/Sub Pattern**: This option is more sophisticated, and it decouples state changes using event-driven architecture. It’s a more complex solution, but it provides a bigger flexibility.\n- **State Management Libraries**: You can always use something like [Redux](https://redux.js.org/) or similar libraries without frameworks.\n";

const __vite_glob_1_240 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: stateMgmtSpa
}, Symbol.toStringTag, { value: 'Module' }));

const treeShaking = "Tree shaking is a technique used in JavaScript module bundlers, like Webpack or Vite, to remove unused code from the final bundled output.\n\nMain benefits include:\n\n1. **Reduced Bundle Size:** Removing unused code reduces the size of the JavaScript bundle sent to the client, improving load times and reducing bandwidth usage.\n2. **Improved Performance:** Smaller bundle sizes can lead to faster parsing and execution times, resulting in improved performance and responsiveness of the web application.\n3. **Better Resource Utilization:** Developers can write modular code without worrying about unused dependencies bloating the final bundle size.\n";

const __vite_glob_1_241 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: treeShaking
}, Symbol.toStringTag, { value: 'Module' }));

const vdom = "![Virtual DOM](https://assets.roadmap.sh/guest/virtual-dom-example-7ynkg.png)\n\nThe way the virtual DOM works is the following:\n\n1. The entire user interface is copied into an in-memory structure called “virtual DOM”, which is a lightweight version of the actual DOM.\n2. When state changes and the UI needs to be updated, a new virtual DOM is created with the updated state.\n3. Then a diff is made between the new virtual DOM and the previous version.\n4. The system will then calculate the least amount of changes required to achieve the new state, and it’ll apply those changes. Only the nodes that need to be updated are touched, which minimizes direct manipulation of the real DOM.\n\nAs for advantages:\n\n- **Performance optimization**: By only updating specific nodes within the real DOM, this technique reduces the number of updates, reflows and repaints on the UI. Directly affecting the performance of the app.\n- **Cross-platform**. The virtual DOM provides a layer of abstraction between the application and the actual API that renders the UI. This means the app can be ported into other platforms as long as there is a virtual DOM implementation for that platform.\n- **Consistency**. This technique keeps the UI in sync with the internal state, reducing bugs and inconsistencies.\n";

const __vite_glob_1_242 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: vdom
}, Symbol.toStringTag, { value: 'Module' }));

const apiSecurity = "Rather than overlapping each other, authorization and authentication reference two very distinct stages of security within your app. \n\n##### Authentication\n\nOn one side, we have authentication, in charge of verifying the user identity. You can use tokens (e.g., JWT, OAuth) or sessions for this.\n\nExample: Validate a JWT sent in headers:  \n\n```javascript\nconst token = req.headers['authorization'];\njwt.verify(token, secretKey, (err, decoded) => { ... });\n```\n\n##### Authorization\n\nOnce authenticated, users need to be authorized to access the resources. For this to work, you’ll need to define roles  and permissions for your users.\n\nMiddleware example:  \n\n```javascript\napp.use((req, res, next) => {\n  if (req.user.role !== 'admin') return res.status(403).send('Forbidden');\n  next();\n});\n```\n\n##### Best Practices\n\n* Use HTTPS to ensure a secure channel between the browser and the server.  \n* Validate input to prevent injection attacks.  \n* Rate-limit API requests to avoid having your APIs overwhelmed by potential attackers.  \n* Store sensitive data securely (e.g., hashed passwords).";

const __vite_glob_1_243 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: apiSecurity
}, Symbol.toStringTag, { value: 'Module' }));

const asyncJavascript = "JavaScript handles asynchronous operations, like fetching data from an API or reading files, through different paradigms: **callbacks**, **promises**, and **async/await**. Each offers unique advantages and challenges. Here's a detailed look:\n\n##### 1\\. Callbacks\n\n**What it is**:  \nA callback is a function passed as an argument to another function to be executed later, usually after an asynchronous task completes.\n\n**Example**:\n\n```javascript\nfs.readFile('file.txt', (err, data) => {\n  if (err) {\n    console.error('Error reading file:', err);\n    return;\n  }\n  console.log('File content:', data.toString());\n});\n```\n\n**Challenges**:\n\n**Callback Hell**: As tasks become more complex, nesting callbacks leads to hard-to-read and maintainable code.\n\n```javascript\ndoTask1(() => {\n  doTask2(() => {\n    doTask3(() => {\n      console.log('All tasks done!');\n    });\n  });\n});\n```\n\n##### 2\\. Promises\n\n**What it is**:  \nA promise represents a value that may be available now, in the future, or never usually coming as a result of an asynchronous operation. It provides a cleaner way to handle asynchronous operations, chaining actions with `.then()` and catching errors with `.catch()`.\n\n**Example**:\n\n```javascript\nfetch('https://api.example.com/data')\n  .then((response) => response.json())\n  .then((data) => {\n    console.log('Fetched data:', data);\n  })\n  .catch((error) => {\n    console.error('Error fetching data:', error);\n  });\n```\n\n**Advantages**:\n\n- Eliminates deeply nested callbacks.\n- Provides a clearer structure for handling asynchronous workflows.\n\n##### 3\\. Async/Await\n\n**What it is**:  \nAsync/await is built on promises but provides a more synchronous and readable syntax for managing this type of code.\n\nFunctions declared with `async` automatically return a promise, and the `await` keyword pauses execution until a promise resolves.\n\n**Example**:\n\n```javascript\nconst fetchData = async () => {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n    console.log('Fetched data:', data);\n  } catch (error) {\n    console.error('Error fetching data:', error);\n  }\n};\n\nfetchData();\n```\n\n**Advantages**:\n\n- Reads like synchronous code, making it easier to understand.\n- Simplifies error handling with `try/catch` blocks.\n";

const __vite_glob_1_244 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: asyncJavascript
}, Symbol.toStringTag, { value: 'Module' }));

const backendCaching = "1. **In-Memory Cache**: Use tools like Redis or Memcached for quick access to frequently used data. Common use case is caching results of expensive database queries.\n\n2. **HTTP Caching**: Leverage `Cache-Control` headers for client-side and proxy caching.\n\n3. **Application-Level Caching**: Store calculated values or frequently used objects in memory using libraries like `express-cache` or decorators.\n\n4. **Distributed Caching**: In distributed systems, use a shared cache (e.g., Redis) to ensure consistency across instances.\n\n5. **Cache Invalidation**: Use strategies like time-to-live (TTL) or event-driven invalidation to keep the cache up-to-date.\n\n6. **Testing**: Monitor cache hit rates and ensure no stale data is served.\n\n**Browser Caching**: While not strictly server-side, take advantage of browser caching to store static resources client-side, reducing backend requests. ";

const __vite_glob_1_245 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: backendCaching
}, Symbol.toStringTag, { value: 'Module' }));

const buildTools = "Build tools bundle, optimize, and prepare your code for deployment.\n\n**Key Functions**:  \n* Bundle JavaScript, CSS, and other assets.  \n* Minify and optimize files for faster loading.  \n* Enable features like hot module replacement (during development).  \n* Handle modern JavaScript (transpile ES6+ to older versions). ";

const __vite_glob_1_246 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: buildTools
}, Symbol.toStringTag, { value: 'Module' }));

const cicdPipelines = "**CI/CD Pipelines** automate the build, test, and deployment of any project. These pipelines are a critical part of any successful development process.\n\n##### Continuous Integration (CI):\nIn this step you automatically build and test the code whenever changes are pushed to a repository. The usual tools for the job are Jenkins, GitHub Actions, CircleCI and other similar alternatives.\n\n##### Continuous Delivery (CD):\nDuring this phase, the actual deployment of the product is automated, so that once the code is verified in the CI stage, it can automatically be promoted into the right environment.\n\n##### Steps in a Pipeline:\nThe steps involved in the full process are:\n\nPull code → Build app → Run tests → Deploy artifact → Notify team\n\nAnd all of them are done automatically one after the other, breaking the chain if there is a failure in one of them.\n\n##### Most common tools used:\n1. **Jenkins**: Highly customizable for complex workflows.  \n2. **GitHub Actions**: Easy integration with GitHub repositories.  \n3. **Docker**: For containerized builds.  \n4. **ArgoCD** or **Spinnaker**: For Kubernetes deployments. ";

const __vite_glob_1_247 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cicdPipelines
}, Symbol.toStringTag, { value: 'Module' }));

const clientServerProgramming = "The **client-side** and **server-side** refer to two distinct parts of a **web application** that work together to deliver functionality to users. Understanding their roles is essential for building efficient and responsive applications.\n\n##### Client-Side\n* **What it Does**: This is the part of the application that runs in the user’s browser. It handles **user interfaces** and interactions, allowing users to see and interact with the application.  \n* **Key Characteristics**:  \n  * Executes **JavaScript code** directly in the browser to handle tasks like form validation, animations, and dynamic content updates (through DOM \\-Document Object Model- updates).  \n  * Manages rendering of HTML and CSS for a seamless visual experience.  \n  * Often communicates with the server via **REST (Representational State Transfer)** APIs to fetch or send data asynchronously.  \n* **Examples**:  \n  * Clicking a button that triggers a JavaScript function to show a popup.  \n  * Fetching additional items on a page using `fetch()` or `axios` without a full page reload.  \n\n##### Server-Side\n\n* **What it Does**: This part operates on the server and processes requests from the client, performing tasks like database queries, business logic, and serving responses.  \n* **Key Characteristics**:  \n  * Executes server-side programming languages like Python, Java, or Node.js.  \n  * Handles sensitive operations like authentication and data storage securely.  \n  * Sends data to the client in structured formats (e.g., JSON) via **REST APIs** for rendering.  \n* **Examples**:  \n  * Processing a login request by verifying credentials in a database.  \n  * Returning a list of products in JSON format for the client to display dynamically.\n";

const __vite_glob_1_248 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: clientServerProgramming
}, Symbol.toStringTag, { value: 'Module' }));

const cloudDeployment = "A full-stack application includes one or more web pages, a backend (which usually involve microservices) and some sort of storage engine (i.e a database).  \nTo deploy all of that together, you have to:\n\n1. **Prepare the Application**: Build the frontend (e.g., using `npm run build`). Ensure the back-end is production-ready (e.g., environment variables, database setup).  \n2. **Deploy Frontend**: Push the code into the servers, usually something like AWS S3, GCP Cloud Storage, or Firebase Hosting to host static files. Configure a CDN (e.g., CloudFront) if needed for static content.  \n3. **Deploy Back-End**: Use cloud services like AWS EC2, GCP Compute Engine, or a managed platform like AWS Elastic Beanstalk. Set up environment variables and connect to the database (e.g., RDS, Cloud SQL).  \n4. **Database**: Use a managed database service (e.g., RDS, Firestore) for scalability, or deploy an on-prem database on your server.  \n5. **DNS and SSL**: Configure a custom domain and HTTPS using AWS Route 53, GCP Domains, or another provider. ";

const __vite_glob_1_249 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cloudDeployment
}, Symbol.toStringTag, { value: 'Module' }));

const codeSplitting = "**Code splitting** breaks a large application into smaller bundles that are loaded only when needed.\n\n**Benefits**:\n* Reduces initial load time by loading only essential code and downloading the rest when needed.\n* Improves performance for slower networks by allowing webapp use much sooner.\n\n**Example using React's `lazy` and `Suspense`**:\n```javascript\nconst LazyComponent = React.lazy(() => import('./Component'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <LazyComponent />\n    </Suspense>\n  );\n} ";

const __vite_glob_1_250 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: codeSplitting
}, Symbol.toStringTag, { value: 'Module' }));

const commonChallenges = "1. **Challenge**: Managing State Across Frontend and Backend.  \n   * **Solution**: Use global state management tools (e.g., Redux, Zustand) and APIs with clear data contracts.  \n\n2. **Challenge**: Scalability Issues.  \n   * **Solution**: Optimize database queries, implement caching, and use scalable cloud infrastructure.  \n\n3. **Challenge**: Security Concerns.  \n   * **Solution**: Implement secure authentication (e.g., OAuth2), sanitize inputs, and follow OWASP guidelines.  \n\n4. **Challenge**: Maintain a consistent quality level across the entire codebase (both frontend and backend code).  \n   * **Solution**: Implement a robust testing strategy that includes: unit testing, integration testing, end-to-end testing, and regular code reviews.  \n\n5. **Challenge**: Keeping Up with Technology Updates.  \n   * **Solution**: Adopt modular architecture to replace outdated tech incrementally.  \n\n6. **Challenge**: Debugging Complex Interactions Between Frontend and Backend.  \n   * **Solution**: Use end-to-end testing frameworks (e.g., Cypress) and logging tools for tracing issues. ";

const __vite_glob_1_251 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: commonChallenges
}, Symbol.toStringTag, { value: 'Module' }));

const corsHandling = "**CORS** (Cross-Origin Resource Sharing) controls access to resources from a different origin (domain, protocol, or port).\n\n**Handling CORS**:\n\n**Backend**: Set headers to allow specific origins.  \nExample in Express:  \n```javascript\nconst cors = require('cors');\napp.use(cors({ origin: 'https://example.com' }));\n```\n\n**Frontend**: Proxy API requests to avoid CORS issues during development. ";

const __vite_glob_1_252 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: corsHandling
}, Symbol.toStringTag, { value: 'Module' }));

const cssSelectors = "**CSS selectors** are patterns used to select and style specific elements in an HTML document. They define which elements a set of CSS rules should apply to, making them a fundamental part of designing the appearance of **web applications** and **user interfaces**.\n\n##### Why CSS Selectors Matter\n\nSelectors allow you to target elements precisely, enabling you to control layout, colors, fonts, and other visual aspects of your website. They are essential for creating structured and maintainable CSS code.\n\nThere are different types of selectors, categorized based on what they target:\n\n* **Elements:** these selectors reference a specific type of element, and affect all instances of that element throughout the page. Example: `p {}`  \n* **Classes:** These selectors only affect those elements that hava a matching class. They’re great to target large groups of elements of the same type, without affecting the entire set. Example: `.my-class {}`  \n* **ID:** ID-level selectors affect only one element (as IDs can only be used on a single element). They’re great when you have a single element that breaks the pattern from the rest of the group. Example: `#my-id {}`  \n* **Attribute:** Attribute-level selectors target elements based on the value of their attributes. They’re great for the cases where you have to dynamically highlight elements. Example: `[type=\"text\"] {}`  \n* **Descendant:** Another way to target other elements is to target them based on the parent element. This method works with any combination of the above, so you can potentially target elements using a specific class that are descendants of an element with a specific attribute value (or any other combination you can think of). Example: `div p {}`\n\n##### When to Use Selectors\n\n* Use type selectors for global styling.  \n* Use class selectors for reusable styles across multiple elements.  \n* Use ID selectors sparingly for unique elements.  \n* Combine selectors for granular control and better maintainability.\n\nCSS selectors give you the power to control every aspect of your web application’s design, ensuring that your user interfaces are consistent, visually appealing, and responsive";

const __vite_glob_1_253 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cssSelectors
}, Symbol.toStringTag, { value: 'Module' }));

const databaseMigrations = "1. **Version Control**: Track migrations using tools like Flyway, Liquibase, or Sequelize.\n\n2. **Create Safe Migration Scripts**:  \n   * Avoid destructive changes like dropping columns immediately\n   * Break migrations into additive steps:\n     - Add new columns\n     - Backfill data\n     - Remove old columns later\n\n3. **Testing**:  \n   * Test migrations in a staging environment with a copy of production data\n\n4. **Rollback Plans**:  \n   * Write scripts to revert migrations in case of failure\n\n5. **Zero-Downtime Deployment**:  \n   * Use techniques like dual writes and feature flags to ensure smooth transitions ";

const __vite_glob_1_254 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: databaseMigrations
}, Symbol.toStringTag, { value: 'Module' }));

const databaseRelationships = "1. **One-to-Many**: One record in a table relates to multiple records in another. Handled via foreign keys. Example: A `user` has many `posts`.  \n2. **Many-to-Many**: Requires a join table to link records from two tables. Example: `students` and `courses` with an intermediary `enrollments` table.  \n3. **Primary/Foreign Keys**: Establish links between tables for querying and ensuring data consistency.";

const __vite_glob_1_255 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: databaseRelationships
}, Symbol.toStringTag, { value: 'Module' }));

const divSpanPurpose = "* **`<div>`**: This is a block-level element that groups other block-level elements (layout or sections) together. It’s quite useful for layout definition.  \n* **`<span>`**: This inline element is great for grouping together other inline elements, such as text nodes. Because the \\<span \\> has no structural impact on the content when used, it’s perfect for styling text (or even sections of a larger text) without visually affecting it (other than the actual CSS applied).";

const __vite_glob_1_256 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: divSpanPurpose
}, Symbol.toStringTag, { value: 'Module' }));

const dockerRole = "Docker containerizes applications and their dependencies, ensuring they run consistently across environments.\n\n**In Development**:  \n* Provides isolated environments (e.g., for different projects).  \n* Simplifies onboarding (e.g., no need to manually install dependencies).  \n\n**In Deployment**:  \n* Ensures consistent environments between dev and production.  \n* Integrates with orchestration tools (e.g., Kubernetes) for scalability.\n\nExample Dockerfile:  \n```dockerfile\nFROM node:14\nWORKDIR /app\nCOPY . .\nRUN npm install\nCMD [\"npm\", \"start\"]\n``` ";

const __vite_glob_1_257 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dockerRole
}, Symbol.toStringTag, { value: 'Module' }));

const environmentVariables = "Environment variables store configuration values (e.g., API keys, database URLs) outside the codebase. This is important for two main reasons:\n\n1. **Security**. By extracting these values (which tend to be private) from the codebase, you avoid potential code leaks from becoming a bigger security problem.  \n2. **More flexible deployments**. If these values need to change, by having them as environment variables you don’t need to re-deploy your code, you just need to reload those values (either by restarting the app, or hot reloading the values from a file).\n\nFor the actual implementation, one might use something like the `dotenv` module, which loads environment variables from a .env file in the local folder of the project, or interact with a secret manager, such as **AWS Secret Manager** which stores these values externally in a secure storage.";

const __vite_glob_1_258 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: environmentVariables
}, Symbol.toStringTag, { value: 'Module' }));

const eventDrivenArchitecture = "**Event-Driven Architecture**: A design pattern where services communicate by emitting and responding to events asynchronously.\n\n**Key Components**:\n* **Event Producer**: Generates events (e.g., a user uploads a file).  \n* **Event Consumer**: Listens and reacts to events (e.g., a service processes the uploaded file).  \n* **Message Broker**: Facilitates event delivery (e.g., Kafka, RabbitMQ).\n\n**When to Use**:\n* Applications needing real-time updates (e.g., chat apps, stock trading platforms).  \n* Decoupled microservices to enhance scalability and maintainability.  \n* Workflows with asynchronous tasks (e.g., order processing). ";

const __vite_glob_1_259 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: eventDrivenArchitecture
}, Symbol.toStringTag, { value: 'Module' }));

const flexboxVsGrid = "**Flexbox**: Designed for one-dimensional layouts (row or column). Best for aligning items within a container. Example use cases: Navigation bars or centering elements.\n\n**CSS Grid**: Designed for two-dimensional layouts (rows and columns). Best for creating complex grid-based layouts. Example use cases: Full-page layouts or dashboards.";

const __vite_glob_1_260 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: flexboxVsGrid
}, Symbol.toStringTag, { value: 'Module' }));

const fullStackDebugging = "1. **Reproduce the Issue**: Identify when and where it happens.  \n2. **Frontend Debugging**:  \n   * Use browser DevTools to inspect network requests (e.g., check HTTP status codes, payloads).  \n   * Check console errors for clues.  \n3. **Back-End Debugging**:  \n   * Check server logs for errors or trace logs for the request.  \n   * Add breakpoints or use a debugger (e.g., Node.js Inspector).  \n4. **Communication Point**: Verify API endpoints, payload structure, and data format.  \n5. **End-to-End Testing**: Test the workflow with tools like Postman to isolate the layer causing issues. ";

const __vite_glob_1_261 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: fullStackDebugging
}, Symbol.toStringTag, { value: 'Module' }));

const fullStackDevelopment = "**Full-stack development** refers to the practice of building and maintaining both the **frontend** and **backend** of a **web application** or **web service**. A full-stack developer works across all layers of the application, ensuring seamless functionality from the user interface to the server and database.\n\nKey aspects of full-stack development include:\n\n* **Frontend Development**: Involves creating the parts of the application that users interact with directly, such as buttons, forms, and layouts. Tools and technologies often used include **HTML**, **CSS**, **JavaScript**, and frameworks like React, Angular, or Vue.js. This may also include building **Progressive Web Apps (PWAs)** for enhanced user experiences.  \n* **Backend Development**: Focuses on server-side logic, databases, and APIs that power the frontend. Common programming languages for backend development include **Python**, **Java**, **Node.js**, and **PHP**. Developers often design and integrate **web services** or REST/GraphQL APIs for data handling.  \n* **Databases and Storage**: Managing data through relational databases (e.g., MySQL, PostgreSQL) or non-relational databases (e.g., MongoDB, Redis).  \n* **DevOps and Deployment**: Setting up hosting environments, CI/CD pipelines, and handling cloud services to deploy and maintain applications.\n\nFull-stack developers are valued for their versatility and ability to understand how different components of a web application interact, making them crucial for delivering well-rounded, functional products.";

const __vite_glob_1_262 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: fullStackDevelopment
}, Symbol.toStringTag, { value: 'Module' }));

const fullStackEnd = "## Final thoughts\n\nYou’ve reached the end of our full-stack developer interview questions, but you’re not done just yet\\!\n\nTo make sure you’re ready to knock the interview out of the park, here’s a quick roadmap for success:\n\n* **Dive deeper**: Explore our detailed guides for specific roles, including [**frontend**](https://roadmap.sh/questions/frontend), [**backend**](https://roadmap.sh/questions/backend), and [**DevOps**](https://roadmap.sh/questions/devops) interviews. Each guide is packed with questions, answers, and tips tailored to those specialities.  \n* **Check out official docs**: For a detailed explanation of every function, method, or property of HTML, CSS or JavaScript, consider checking out [MDN](https://developer.mozilla.org/en-US/).  \n* **Practice projects**: Build small projects to solidify your understanding of key concepts. Hands-on experience always makes a big difference.  \n* **Brush up on fundamentals**: Review core concepts like algorithms, data structures, and design patterns to handle technical full-stack developer interview questions confidently.  \n* **Mock interviews**: Simulate the interview experience with a friend or use online platforms to build your confidence.  \n* **Stay curious**: Explore new tools and technologies related to your role to showcase your passion for learning.\n\nGood luck, and remember—confidence comes with preparation\\!";

const __vite_glob_1_263 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: fullStackEnd
}, Symbol.toStringTag, { value: 'Module' }));

const getPostDifference = "While there is no hard rule stating these methods needs to be used in a very specific way, the currently accepted standard, says that:\n\n* **GET**: Retrieves data from a server (read-only).  \n* **POST**: Sends data to the server to create or update resources.\n\n";

const __vite_glob_1_264 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: getPostDifference
}, Symbol.toStringTag, { value: 'Module' }));

const graphqlVsRest = "GraphQL is a query language for APIs that allows clients to request exactly the data they need, reducing over-fetching or under-fetching.\n\n##### Main differences with REST:\n\n**Data Fetching**:\n* REST: Fixed endpoints return predefined data\n* GraphQL: Single endpoint with flexible queries\n\n**Batching**:\n* GraphQL can fetch related data in one request (nested queries)\n* REST often requires multiple endpoints for related data\n\n**Versioning**:\n* REST may need new versions for API changes\n* GraphQL avoids versioning by evolving schemas\n\n**Example GraphQL Query**:\n```graphql\nquery {\n  user(id: 1) {\n    name\n    posts {\n      title\n    }\n  }\n}\n``` ";

const __vite_glob_1_265 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: graphqlVsRest
}, Symbol.toStringTag, { value: 'Module' }));

const highAvailability = "**High Availability**:\n* Use load balancers to distribute traffic across multiple servers\n* Set up redundancy with failover systems and multiple availability zones\n* Use managed databases with replicas for disaster recovery\n\n**Scalability**:\n* Implement horizontal scaling by adding more instances\n* Use auto-scaling services like AWS Auto Scaling or Kubernetes\n* Cache frequently accessed data (e.g., using Redis or Memcached)\n\n**Other Best Practices**:\n* Optimize database queries and use indexing\n* Implement rate limiting and throttling to handle surges ";

const __vite_glob_1_266 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: highAvailability
}, Symbol.toStringTag, { value: 'Module' }));

const htmlCssJsPurpose = "* **HTML**: Defines the structure and content of a webpage.  \n* **CSS**: Styles the webpage (colors, layout, fonts).  \n* **JavaScript**: Adds interactivity and dynamic behavior to the webpage.";

const __vite_glob_1_267 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: htmlCssJsPurpose
}, Symbol.toStringTag, { value: 'Module' }));

const includeCss = "There are two main ways to include CSS into your HTML, you can either do it “inline” or you can do it with the “style” tag.\n\n**Inline**: Add `style` directly in an HTML element.\n\n```html\n<p style=\"color: red;\">Hello</p>\n```\n\n**Internal**: Use a `<style>` tag in the `<head>`.\n\n```html\n<style>\np { color: red; }\n</style>\n```\n\n**External**: Link a CSS file using `<link>` in the `<head>`.\n\n```html\n<link rel=\"stylesheet\" href=\"styles.css\">\n```\n";

const __vite_glob_1_268 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: includeCss
}, Symbol.toStringTag, { value: 'Module' }));

const internationalization = "**Frontend**: Use libraries like `react-intl` or `i18next` to manage translations.\n\nExample:  \n```javascript\nimport { useTranslation } from 'react-i18next';\nconst { t } = useTranslation();\n<h1>{t('welcome_message')}</h1>;\n```\n\n**Backend**:\n1. Store translations in a database or JSON files.  \n2. Serve the correct language file based on user preferences or `Accept-Language` headers.\n\n**Additional Considerations**:\n* Support language-specific routes (e.g., `/en/home`, `/fr/home`)\n* Translate content dynamically from the database or CMS\n* Provide fallback languages if a translation is unavailable\n* Test language switches and correct text alignment for RTL languages like Arabic ";

const __vite_glob_1_269 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: internationalization
}, Symbol.toStringTag, { value: 'Module' }));

const jsDomManipulation = "JavaScript accesses and modifies the DOM using methods like:\n\n* **Get elements**: `document.getElementById(\"id\")`, `querySelector(\".class\")`.  \n* **Modify content**: `element.innerHTML = \"New Content\"`.  \n* **Change styles**: `element.style.color = \"blue\"`.  \n* **Add/remove elements**: `appendChild()`, `removeChild()`.";

const __vite_glob_1_270 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: jsDomManipulation
}, Symbol.toStringTag, { value: 'Module' }));

const jsEqualityOperators = "* **`==`**: Compares values with each other directly, performing type conversion if required first (example: `'5' == 5` → `true`).  \n* **`===`**: This operator strictly compares values and types with each other. There is no type conversion performed with this operator. For example, if you try to compare a string and a number, the result will always be false, no matter what: `'5' === 5` → `false`.";

const __vite_glob_1_271 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: jsEqualityOperators
}, Symbol.toStringTag, { value: 'Module' }));

const memoryLeaks = "Memory leaks usually happen when unused resources (e.g., DOM elements, event listeners, or data structures) are not properly released, causing unnecessary memory consumption.   \n\n**Common Solutions**:\n\n1. **Clean up event listeners**: Remove listeners when components unmount:\n```javascript\nuseEffect(() => {\n  window.addEventListener('resize', handler);\n  return () => window.removeEventListener('resize', handler);\n}, []);\n```\n\n2. **Abort fetch requests**: Use `AbortController` to cancel pending API calls:\n```javascript\nconst controller = new AbortController();\nfetch(url, { signal: controller.signal });\nreturn () => controller.abort();\n```\n\n3. **Avoid stale references**: Ensure state updates do not persist after unmounting by checking component state.\n\n4. **Use profiling tools**: Monitor and analyze memory usage using browser DevTools to detect leaks. ";

const __vite_glob_1_272 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: memoryLeaks
}, Symbol.toStringTag, { value: 'Module' }));

const microservices = "1. **Decompose the Application**: Identify distinct business domains and split functionality into small, loosely coupled services.\n\n2. **Service Communication**: \n   * Use APIs (REST or GraphQL) for synchronous communication\n   * Use messaging systems (e.g., RabbitMQ, Kafka) for asynchronous communication\n\n3. **Independent Data Stores**: Each service manages its own database to ensure independence.\n\n4. **Service Discovery**: Use a registry like Consul or Eureka to manage service locations dynamically.\n\n5. **Deployment**: \n   * Containerize services with Docker\n   * Orchestrate using Kubernetes\n\n6. **Monitoring**: Use tools like Prometheus, Grafana, or ELK Stack for observability and debugging. ";

const __vite_glob_1_273 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: microservices
}, Symbol.toStringTag, { value: 'Module' }));

const mvcArchitecture = "**MVC** is a design pattern for organizing code in three layers:\n\n1. **Model**: Handles data and business logic (e.g., database interactions).  \n2. **View**: Displays data to users (e.g., HTML, templates).  \n3. **Controller**: Manages user input and communicates between Model and View.\n\n**Flow**:\n* User interacts with the **View** → **Controller** processes input → Updates the **Model** → Changes are reflected in the **View**. ";

const __vite_glob_1_274 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: mvcArchitecture
}, Symbol.toStringTag, { value: 'Module' }));

const nodejsDatabaseCrud = "In general terms, connecting to a database using Node.js requires the following steps:\n\n1. Install the DB driver.  \n2. Use the driver to connect to the database.  \n3. Use the returned connection object to send requests.\n\nOf course, depending on the database engine you decide to go with, there might be some slight changes to those steps.  \nHowever, if we think about either MongoDB or PostgreDB, let’s take a look at how to interact with them through Node.js:\n\n##### Install the Database Driver\n\nThe first thing you gotta do, is install either the driver which will let you directly interact with the database, or an ORM, which will abstract that connection and give you a higher-level layer of abstraction.   \nUse the appropriate driver for your database.\n\n* For MongoDB: `npm install mongoose`  \n* For PostgreSQL: `npm install pg`\n\n##### Connect to the database\n\nNow to connect to the actual database, you’ll have to adapt the code based on the connection method you’re using. Let’s take a closer look at how to connect either to MongoDB or PostgreDB.\n\n**MongoDB**:  \n\n```javascript\nconst mongoose = require('mongoose');\nmongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });\n```\n\n**PostgreSQL**:  \n\n```javascript\nconst { Pool } = require('pg');\nconst pool = new Pool({ user: 'user', host: 'localhost', database: 'mydb', password: 'password', port: 5432 });\n```\n\n##### Perform CRUD Operations\n\nFor the CRUD (Create, Read, Update & Delete), the code is going to change based on the technology you’re using. Here in our examples, we have one that’s using an ORM which means we have an abstraction layer on top of the native query language, and then we also have a simple SQL driver, which means we have to directly write SQL queries.\n\n**Create operation**:\n\n**MongoDB**:  \n\n```javascript\nconst User = mongoose.model('User', { name: String });\nUser.create({ name: 'John Doe' });\n```\n\n**PostgreSQL**:  \n\n```javascript\npool.query('INSERT INTO users (name) VALUES ($1)', ['John Doe']);\n```\n\n**Read operation**:\n\n**MongoDB**:  \n\n```javascript\nUser.find({}, (err, users) => console.log(users));\n```\n\n**PostgreSQL**:  \n\n```javascript\npool.query('SELECT * FROM users', (err, res) => console.log(res.rows));\n```\n\n**Update operation**:\n\n**MongoDB**:  \n\n```javascript\nUser.updateOne({ name: 'John Doe' }, { name: 'Jane Doe' });\n```\n\n**PostgreSQL**:  \n\n```javascript\npool.query('UPDATE users SET name = $1 WHERE name = $2', ['Jane Doe', 'John Doe']);\n```\n\n**Delete operation**:\n\n**MongoDB**:  \n\n```javascript\nUser.deleteOne({ name: 'Jane Doe' });\n```\n\n**PostgreSQL**:  \n\n```javascript\npool.query('DELETE FROM users WHERE name = $1', ['Jane Doe']);\n```\n";

const __vite_glob_1_275 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: nodejsDatabaseCrud
}, Symbol.toStringTag, { value: 'Module' }));

const nodejsMiddleware = "Middleware in Express is a function that processes requests and responses in the app’s request-response cycle. It can be used to modify request/response objects adding extra information or removing unnecessary data, it can execute code (like logging, parsing JSON, etc) and it can also end the request-response cycle, allowing it to short-circuit the process and return a different response (commonly used to handle invalid or unauthorized requests).\n\nExample:  \n```javascript\napp.use((req, res, next) => {\n  console.log('Middleware triggered');\n  next();\n});\n```";

const __vite_glob_1_276 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: nodejsMiddleware
}, Symbol.toStringTag, { value: 'Module' }));

const packageJsonPurpose = "The `package.json` file in a Node.js project has multiple uses. It defines the project's metadata, like its name, version, and description. It also lists the dependencies and devDependencies required to run or develop the application, as well as scripts for tasks like building, testing, or running the app (and any custom script you’d like to add). \n\nFinally, it ensures reproducible installations by allowing the `npm install` command to pull consistent dependencies, ensuring you can easily port your project into other systems.";

const __vite_glob_1_277 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: packageJsonPurpose
}, Symbol.toStringTag, { value: 'Module' }));

const performanceMonitoring = "As a full-stack developer, the monitoring of your application involves the full 360 view of the app, from the frontend into the backend, including the database, and other involved systems.\n\n##### Frontend Monitoring:\n* Use tools like Google Lighthouse or Web Vitals to track load times, interactivity, and rendering.\n* Monitor user behavior with tools like New Relic Browser or LogRocket.\n\n##### Backend Monitoring:\n* Use APM tools (e.g., Datadog, Dynatrace) to monitor server response times, database query performance, and API latency.\n\n##### Logging:\n* Centralize logs with tools like ELK Stack or CloudWatch Logs for analyzing bottlenecks.\n* Critical for systems with many individual microservices and different clients working together.\n\n##### Database Monitoring:\n* Use query profilers (e.g., MySQL EXPLAIN) and monitor database health with tools like Percona Monitoring.\n\n##### Alerting:\n* Set up alerts for anomalies or thresholds using tools like Prometheus and Grafana. ";

const __vite_glob_1_278 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: performanceMonitoring
}, Symbol.toStringTag, { value: 'Module' }));

const postmanTesting = "1. **Create a Request**: Enter the API endpoint, method (GET, POST, etc.), and headers.  \n2. **Send Data**:  \n   * Add query params, body (JSON, form data), or headers.  \n3. **Send Request**: Click \"Send\" to view the response.\n\n**Assertions**: Use the **Tests** tab to write scripts (JavaScript) for automated validation of responses.  \nExample:  \n```javascript\npm.test(\"Status is 200\", () => {\n  pm.response.to.have.status(200);\n});\n```\n\n4. **Collections**: Group requests for testing workflows or environments. ";

const __vite_glob_1_279 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: postmanTesting
}, Symbol.toStringTag, { value: 'Module' }));

const reactHooks = "React hooks are functions that let you use state and other React features in functional components.\n\nWith hooks you can simplify state and lifecycle management without needing class components. They also enable code reuse through custom hooks.\n\n**Examples of different hooks**:\n\n* `useState` for managing state.  \n* `useEffect` for handling side effects (e.g., fetching data).  \n* `useContext` for global state.";

const __vite_glob_1_280 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: reactHooks
}, Symbol.toStringTag, { value: 'Module' }));

const reactPerformance = "The performance of a React application can be affected by multiple aspects, but some of the most common ones and their way to fix them are:\n\n1. **Reduce Re-renders**:  \n   * Use `React.memo` and `useCallback` to avoid unnecessary updates.  \n   * Split large components into smaller, focused components.  \n2. **Lazy Loading**: Load components or routes on demand using `React.lazy` and `Suspense`.  \n3. **Efficient State Management**: Keep state local where possible and avoid overusing global state.  \n4. **Minimize DOM Updates**: Use keys in lists and avoid deeply nested props/state updates.  \n5. **Code Splitting**: Use Webpack or tools like `react-loadable` to split the bundle.  \n6. **Profile and Debug**: Use React Developer Tools to identify bottlenecks.";

const __vite_glob_1_281 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: reactPerformance
}, Symbol.toStringTag, { value: 'Module' }));

const reactSeo = "1. **Server-Side Rendering (SSR)**: Use frameworks like Next.js to render pages on the server for better crawlability.  \n2. **Meta Tags**: Dynamically set titles, descriptions, and keywords using libraries like `react-helmet`.  \n3. **Sitemap and Robots.txt**: Generate a sitemap.xml and configure robots.txt for search engines.  \n4. **Lazy Loading**: Ensure above-the-fold content loads quickly.  \n5. **Structured Data**: Add JSON-LD for rich search results.  \n6. **Canonical URLs**: Avoid duplicate content issues with proper canonical tags. ";

const __vite_glob_1_282 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: reactSeo
}, Symbol.toStringTag, { value: 'Module' }));

const reactSsr = "The easiest way is to use a framework like **Next.js** for built-in SSR support.\n\n**Steps involved**:\n\n1. Set up pages with `getServerSideProps` to fetch data at request time:  \n```javascript\nexport async function getServerSideProps() {\n  const data = await fetch('https://api.example.com');\n  return { props: { data } };\n}\n```\n\n2. Render the page server-side and send it as HTML to the client.  \n3. Hydrate the page on the client to make it interactive. ";

const __vite_glob_1_283 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: reactSsr
}, Symbol.toStringTag, { value: 'Module' }));

const reactStateManagement = "In React you have two different ways to handle state, depending on the scope of the data inside that state. \n\nIf the scope is local, then you can handle it through a simple `useState` hook inside the component itself. \n\nIf on the other hand, you need to store a global state which is accessible for many components, then you can use something like the `Context API` or specific state libraries like Redux, MobX or Zustand.\n\nThe way state handling works in React (in general terms) works like this:\n\n* State is updated via actions (e.g., event handlers).  \n* Updated state triggers re-renders to reflect changes in the UI.  \n* Avoid excessive re-renders by optimizing context or using memoization (`React.memo`, `useMemo`).";

const __vite_glob_1_284 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: reactStateManagement
}, Symbol.toStringTag, { value: 'Module' }));

const realTimeUpdates = "1. **Use WebSockets**: Establish a persistent connection for real-time communication.\n\nExample Client:  \n```javascript\nconst socket = new WebSocket('ws://server.com');\nsocket.onmessage = (message) => console.log(message.data);\n```\n\n2. **Server Setup**: Use libraries like `socket.io` for WebSocket management.\n\nExample Server:  \n```javascript\nconst io = require('socket.io')(server);\nio.on('connection', (socket) => {\n  socket.on('chat message', (msg) => io.emit('chat message', msg));\n});\n```\n\n3. **Fallback for Compatibility**: Implement long polling or server-sent events (SSE) if WebSockets aren't feasible.  \n4. **Database Integration**: Use event-driven solutions like Redis pub/sub for scalability in multi-server setups.  \n5. **Security**: Ensure secure WebSocket connections (wss://) and authenticate users. ";

const __vite_glob_1_285 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: realTimeUpdates
}, Symbol.toStringTag, { value: 'Module' }));

const relationalVsNosql = "* **Relational**: Stores data in structured tables with rows and columns (e.g., MySQL, PostgreSQL). Good for relationships and complex queries.  \n* **Non-relational**: Stores data in flexible formats like documents, key-value pairs, or graphs (e.g., MongoDB, Redis). Better for unstructured or hierarchical data.";

const __vite_glob_1_286 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: relationalVsNosql
}, Symbol.toStringTag, { value: 'Module' }));

const responsiveDesign = "**Responsive design** ensures a website looks good on all devices by adapting its layout to different screen sizes.\n\nTo help ensure this, you can use flexible grids (either `CSS Grid` or `Flexbox`).\n\nYou will also have to apply media queries which help set breakpoints where the different styles need to be applied based on the width of the window:  \n\n```css\n@media (max-width: 768px) {\n  .container { flex-direction: column; }\n}\n```\n\nYou can also use relative units (`%`, `em`, `rem`) instead of fixed units (`px`) to ensure the values automatically adapt to the size of the container.";

const __vite_glob_1_287 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: responsiveDesign
}, Symbol.toStringTag, { value: 'Module' }));

const restApi = "A **REST API** (Representational State Transfer Application Programming Interface) is a standardized way for applications to communicate over HTTP by following a set of principles. It allows clients (like web browsers or mobile apps) to interact with servers to perform operations like fetching or modifying data.\n\n**Key Features of a REST API**:\n\n1. **Stateless Communication**: Each request from the client to the server must contain all the information needed for the server to process it, with no reliance on stored session data.  \n2. **Resource-Based**: Data and functionality are treated as \"resources\" accessed using endpoints (URLs).  \n   * Example: `/users` to get a list of users, `/users/1` to access a specific user.  \n3. **HTTP Methods**: REST APIs use HTTP methods to define actions:  \n   * **GET**: Retrieve data.  \n   * **POST**: Create new resources.  \n   * **PUT**: Update existing resources.  \n   * **DELETE**: Remove resources.  \n4. **Structured Responses**: Data is typically returned in a lightweight format like **JSON** or **XML**.\n\n**Why is it Used?**\n\n* **Interoperability**: REST APIs enable communication between different systems and platforms, making them ideal for building **web services**.  \n* **Scalability**: They are stateless, allowing them to handle more traffic with horizontal scaling.  \n* **Ease of Use**: Clear structure and standard conventions make it easy for developers to understand and implement.  \n* **Flexibility**: Suitable for a variety of clients, from **web applications** to mobile and IoT devices.";

const __vite_glob_1_288 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: restApi
}, Symbol.toStringTag, { value: 'Module' }));

const restPagination = "Adding pagination to a RESTful API can be done in multiple ways, but assuming a standard implementation, the best option is to go with query parameters.\n\n**Query Parameters**: Using `limit` and `offset` (or `page` and `size`).  \n\n```\nGET /api/items?limit=10&offset=20\n```\n\n**Back-End Implementation**:\n\nIn the backend, we’re turn those query params into something like:\n\n**SQL code:**  \n```sql\nSELECT * FROM items LIMIT 10 OFFSET 20;\n```\n\n**In code:**  \n```javascript\nconst items = await db.find().skip(offset).limit(limit);\nres.json({ data: items });\n```\n\n##### Metadata\n\nInclude total count and current page in the response for better UX.\n\n```json\n{ \n  \"data\": [...], \n  \"total\": 100,\n  \"page\": 3,\n  \"size\": 10 \n}\n```";

const __vite_glob_1_289 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: restPagination
}, Symbol.toStringTag, { value: 'Module' }));

const securityVulnerabilities = "##### SQL Injection:\n\nTo avoid SQL injection attacks, use parameterized queries or prepared statements to prevent malicious SQL code from being executed:\n```javascript\ndb.query('SELECT * FROM users WHERE id = ?', [userId]);\n```\n\nAlso validate and sanitize user inputs to ensure it doesn't contain characters that might interfere with SQL statements.\n\n##### Cross-Site Scripting (XSS):\n\nTo avoid allowing scripts or dynamic content to affect your page:\n\n1. Escape content before rendering in the browser:\n```javascript\n<div>{sanitize(userInput)}</div>\n```\n\n2. Use libraries like DOMPurify to sanitize HTML.\n\n3. Set `Content-Security-Policy` headers to restrict allowed sources for scripts to trusted sources. ";

const __vite_glob_1_290 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: securityVulnerabilities
}, Symbol.toStringTag, { value: 'Module' }));

const userAuthentication = "There are many ways to handle authentication, from simple auth, all the way to oAuth. The right option depends on your particular business needs.  \nA classical example is using JWT for authenticating a website with a RESTful API using the following process:\n\n1. **Frontend**: Present a login form to collect credentials from the user.  \n2. **Backend**: Verify credentials against a database and if they’re valid, create a signed token and return it in the response.  \n3. **Secure connection**: From this point on, the frontend will send the token on every request and the backend will validate it to ensure it’s a valid and authenticated user.  \n4. **Secured best practices**: Ensure your passwords are hashed (e.g., with bcrypt) and use HTTPS for a secured data transmission channel.";

const __vite_glob_1_291 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: userAuthentication
}, Symbol.toStringTag, { value: 'Module' }));

const versionControl = "**Purpose**: Version control tracks changes in code, enables collaboration, and allows reverting to previous versions.\n\n**Git Workflow Example**:\n\n1. Clone the repository: `git clone <repo_url>`.  \n2. Create a branch: `git checkout -b feature-branch`.  \n3. Make changes and stage them: `git add .`.  \n4. Commit changes: `git commit -m \"Add feature\"`.  \n5. Push to the remote: `git push origin feature-branch`.  \n6. Create a pull request for review.  \n7. Merge the branch into the main branch after approval.";

const __vite_glob_1_292 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: versionControl
}, Symbol.toStringTag, { value: 'Module' }));

const websockets = "**WebSockets**: A protocol for full-duplex communication between client and server over a single persistent connection.\n\n**Difference**:\n\n* **HTTP**: Request-response model; client initiates every interaction.  \n* **WebSockets**: Persistent, allowing real-time, two-way communication (e.g., live chat, notifications).\n\nExample:\n\n* HTTP: Send a request for new messages repeatedly (polling).  \n* WebSocket: Server pushes new messages as they arrive.";

const __vite_glob_1_293 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: websockets
}, Symbol.toStringTag, { value: 'Module' }));

const basicDataTypes = "Go's basic data types include booleans, integers, floating-point numbers, and strings. These basic data types in Go are similar to those in other languages; however, Go enforces that all variables share types during operations, in other words, Go is strongly typed. \n\nThis need for explicit type conversion (there is no implicit alternative in Go) requirement minimizes runtime errors and increases code reliability. ";

const __vite_glob_1_294 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: basicDataTypes
}, Symbol.toStringTag, { value: 'Module' }));

const channelsCommunication = "Channels in Go are used to transfer data between goroutines safely. \n\nBest practices include:\n* Closing channels when they are no longer needed, letting receivers know they don't have to wait indefinitely.  \n* Ensuring that channels are buffered when necessary, because buffered channels allow you to send a fixed number of values without blocking the sender immediately. This can be useful when you know the maximum number of items that might be sent, which helps in avoiding deadlocks.  \n* Use the `select` statement when working with multiple channels. It helps in waiting on multiple channel operations simultaneously, making your concurrent code more robust. ";

const __vite_glob_1_295 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: channelsCommunication
}, Symbol.toStringTag, { value: 'Module' }));

const codeAnalysis = "When looking for problems with how you manage your dependencies in your code and when you're looking for leaks in your memory consumption, some of the key factors to look out for include examining how external resources and dependencies are handled.  \n\nThe reliance (or over-reliance) on global variables for storing data may also lead to excessive use of memory, so that would be a point to look out of, if data accumulates over time without proper management or synchronization, especially in a concurrent setting.\n\nFrom a dependency perspective, it is important to verify that external packages are used correctly and that their versions are managed through Go Modules. While the code snippet does not show a go.mod file, best practices involve pinning specific vesions in go.mod and go.sum, ensuring reproducible builds and guarding against breaking changes from dependency updates. This integration with version control allows for a clear history of dependency changes, facilitates rollbacks if issues arise, and promotes consistent builds across different environments. ";

const __vite_glob_1_296 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: codeAnalysis
}, Symbol.toStringTag, { value: 'Module' }));

const codeReusability = "The signature of a method defines how a function or method should be called and what parameters and return values are expected. This clear contract makes your code flexible and reusable. For example:\n\n```go\npackage main\n\nimport \"fmt\"\n\ntype Greeter interface {\n    Greet() string\n}\n\n// Person struct implements the Greeter interface\ntype Person struct {\n    Name string\n}\n\nfunc (p Person) Greet() string {\n    return \"Hello, \" + p.Name + \"!\"\n}\n\n// SayHello accepts any type that satisfies the interface value Greeter.\nfunc SayHello(g Greeter) {\n    fmt.Println(g.Greet())\n}\n\nfunc main() {\n    p := Person{Name: \"John\"}\n    SayHello(p)\n}\n``` ";

const __vite_glob_1_297 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: codeReusability
}, Symbol.toStringTag, { value: 'Module' }));

const compositeDataTypes = "Composite data types in Go, like arrays, slices, maps, and structs, let you group values into a single structure. \n\nFor example, the below code show how a struct can be used to process json data:\n\n```go\npackage main\n\nimport \"fmt\"\n\n// Define a composite data type using a struct\ntype Person struct {\n    Name string\n    Age  int \n}\n\nfunc main() {\n    // Create a new struct and print key value pairs\n    person := Person{Name: \"Alice\", Age: 30}\n    fmt.Println(\"Name:\", person.Name, \"Age:\", person.Age)\n}\n``` ";

const __vite_glob_1_298 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: compositeDataTypes
}, Symbol.toStringTag, { value: 'Module' }));

const concurrencyManagement = "In Go you can use lightweight threads to manage concurrent tasks. These lightweight alternatives use much less memory and resources than their native counterparts. And they can use \"channels\" to share data between them.\n\nThese \"goroutines\" are incredibly efficient, managed by Go's runtime, and provide developers with a much needed simplified threading model. ";

const __vite_glob_1_299 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: concurrencyManagement
}, Symbol.toStringTag, { value: 'Module' }));

const concurrencyModel = "Go's concurrency model is different from traditional alternatives because it uses goroutines instead of OS threads. These goroutines, which are non-native threads managed by the runtime require a fraction of the memory OS threads normally require. \n\nOn top of that, these goroutines communicate with each other through \"channels\", ensuring that data flows safely from one function to another. \n\nThis design improves cpu and memory resources management, making concurrent programming in the Go efficient and robust. ";

const __vite_glob_1_300 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: concurrencyModel
}, Symbol.toStringTag, { value: 'Module' }));

const customErrorTypes = "Custom error types in Go are typically designed by creating a struct to encapsulate error details and implementing the Error() method to satisfy the error interface. \n\nThis, in turn, gives developers the tools to perform type assertions and the use of errors.Is or errors.As for effective error management. The following is an example of how to create your own custom error in Go:\n\n```go\npackage main\n\nimport (\n    \"fmt\"\n)\n\n//The struct to hold the error\ntype MyError struct {\n    Code    int\n    Message string\n}\n\n//The custom Error method.\nfunc (e MyError) Error() string {\n    return fmt.Sprintf(\"Error %d: %s\", e.Code, e.Message)\n}\n\nfunc mightFail(flag bool) error {\n    if flag {\n        return MyError{Code: 500, Message: \"Internal error occurred\"}\n    }\n    return nil\n}\n\nfunc main() {\n    err := mightFail(true)\n    if err != nil {\n        if myErr, ok := err.(MyError); ok {\n            fmt.Printf(\"Handled custom error with code %d and message: %s\\n\", myErr.Code, myErr.Message)\n        } else {\n            fmt.Println(\"An error occurred:\", err)\n        }\n    }\n}\n``` ";

const __vite_glob_1_301 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: customErrorTypes
}, Symbol.toStringTag, { value: 'Module' }));

const dataTypeConversion = "In Go, you have to explicitly convert types, meaning that you have to explicitly cast one type into the other, there is no implicit or default behavior when assigning values to variables of a different type (i.e assigning an int value to a boolean variable). \n\nSpecifically for numeric value conversions, you simply cast using the target type (for example, float64(intValue)). \n\nSome pitfalls of this process might include losing precision or encountering overflow. It's important to ensure that data types match (can be translated into each other) to prevent errors during conversion. ";

const __vite_glob_1_302 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dataTypeConversion
}, Symbol.toStringTag, { value: 'Module' }));

const dependencyComparison = "Go's approach of using the go.mod file is more straightforward compared to the often complex systems in other languages. For example, go.mod files are much more straightforward to create and maintain than Maven XMLs or NPM's JSON files, which require the creation of verbose configuration files.\n\nIn terms of best practices, always try to update dependencies (mostly their version, making sure their internal logic is still compatible with your Go version), using version control systems, and ensuring code documentation is up to date. ";

const __vite_glob_1_303 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dependencyComparison
}, Symbol.toStringTag, { value: 'Module' }));

const dependencyIntegration = "Go integrates version control with its module system, using go.mod and go.sum files to track versions and package references. This setup ensures that builds are reproducible—everyone using the same go.mod file gets identical versions, while go.sum verifies the integrity of downloaded modules with cryptographic hashes.\n\nBest practices include adhering to semantic versioning, regularly updating dependencies (while checking backwards compatibility), and maintaining reproducible builds through version control integration. ";

const __vite_glob_1_304 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dependencyIntegration
}, Symbol.toStringTag, { value: 'Module' }));

const dependencyManagement = "In Go, you manage dependencies using the go.mod file along with version control systems like Git. \n\nManaging dependencies is important because they allow developers to create reproducible builds, ensuring that all imported packages remain compatible. ";

const __vite_glob_1_305 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dependencyManagement
}, Symbol.toStringTag, { value: 'Module' }));

const dependencyVersionControl = "To manage your dependencies in Go, you can use the go.mod file, which allows you to do it in an organized manner. \n\nVersion control systems like Git ensure that code, documentation, and dependencies remain consistent across multiple functions and modules, helping you manage dependencies and maintain the same type of environment for all developers. ";

const __vite_glob_1_306 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dependencyVersionControl
}, Symbol.toStringTag, { value: 'Module' }));

const efficientMemoryManagement = "Efficient memory management in Go can be achieved by carefully declaring variables with appropriate scope and preallocating data structures like slices or maps when possible, while releasing unused references to aid garbage collection and avoiding long-lived goroutines or channels that could cause leaks in your memory consumption. ";

const __vite_glob_1_307 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: efficientMemoryManagement
}, Symbol.toStringTag, { value: 'Module' }));

const errorHandlingComparison = "Go uses explicit error handling by returning an error value alongside other results. \n\nThis contrasts with the exception handling mechanisms found in other languages, leading to clearer code documentation and predictable error management paths.\n\nHere's a quick example of what all of this looks like:\n\n```go\npackage main\n\nimport (\n    \"errors\"\n    \"fmt\"\n)\n\n// Divide divides two numbers and returns an error if division by zero is attempted.\nfunc Divide(a, b float64) (float64, error) {\n    if b == 0 {\n        // Explicitly return an error value when b is zero.\n        return 0, errors.New(\"division by zero is not allowed\")\n    }\n    // Return the result and nil for error if division is successful.\n    return a / b, nil\n}\n``` ";

const __vite_glob_1_308 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: errorHandlingComparison
}, Symbol.toStringTag, { value: 'Module' }));

const errorHandling$1 = "Error handling in Go is explicit. You return an error value along with other multiple values from a function, which must then be checked before proceeding. \n\nYou can, of course, improve the default behavior and provide more context to aid in debugging by designing your own personalized error types. ";

const __vite_glob_1_309 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: errorHandling$1
}, Symbol.toStringTag, { value: 'Module' }));

const functionCalls = "Calling a function in Go involves passing parameters to a function (by value, meaning that all values are copied in memory when passed to the function) and then executing its code. You can of course use pointers to share data \"by reference\" if you need to.\n\nWhen the function is called, the runtime creates a new section of memory (a stack frame) to store these copied values along with any other information needed.\n\nOnce the function finishes executing, the runtime cleans up this memory (garbage collection) and returns control to the calling function.\n\nHere's an example of how to call functions in Golang:\n\n```go\npackage main\n\nimport \"fmt\"\n\nfunc greet(name string) string {\n    return \"Hello, \" + name + \"!\"\n}\n\nfunc main() {\n    // Here we call the function.\n    message := greet(\"Bob\")\n    fmt.Println(message)\n}\n``` ";

const __vite_glob_1_310 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: functionCalls
}, Symbol.toStringTag, { value: 'Module' }));

const functionExecution = "Calling functions in Go involves setting up a new stack frame, transferring control to the called function, and eventually returning to the function when it completes. \n\nThis process is handled at the lowest abstraction level, ensuring efficient execution and minimal overhead. ";

const __vite_glob_1_311 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: functionExecution
}, Symbol.toStringTag, { value: 'Module' }));

const functionInteraction = "When a function is called in Go, it creates a new stack frame. Once the called function completes, control goes back to the surrounding function, and any data transfer between functions is managed by the runtime. \n\nThis process is highly optimized at the machine code level. ";

const __vite_glob_1_312 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: functionInteraction
}, Symbol.toStringTag, { value: 'Module' }));

const garbageCollectionEffects = "Go's garbage collection automatically frees unused memory, improving memory management efficiency and reducing the risk of leaks. This ensures stable memory usage throughout the execution of your code, even when handling multiple tasks concurrently. ";

const __vite_glob_1_313 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: garbageCollectionEffects
}, Symbol.toStringTag, { value: 'Module' }));

const globalVariableImplications = "Global variables in Go, which are declared at the package level, persist for the duration of the program. This means global variables might cause increased memory utilization (or even leaks) or concurrency issues if not managed with proper synchronization, thereby affecting modularity and testability. ";

const __vite_glob_1_314 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: globalVariableImplications
}, Symbol.toStringTag, { value: 'Module' }));

const globalVariables = "Global variables are declared outside functions and can be accessed by any other function from the project. \n\nAlthough they facilitate data transfer between functions, overusing global variables is a known code smell that can lead to increased memory consumption and make your code less maintainable. ";

const __vite_glob_1_315 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: globalVariables
}, Symbol.toStringTag, { value: 'Module' }));

const golangIntro = "Golang, often referred to as Go, is an open source programming language designed to be simple and fast. \n\nIts key features include a strong emphasis on efficient handling of memory, garbage collection, built-in testing package support for writing unit tests, and a concurrency model that uses lightweight threads. \n\nCompared to other programming languages, Go offers excellent performance, especially when managing dependencies and handling memory allocation. ";

const __vite_glob_1_316 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: golangIntro
}, Symbol.toStringTag, { value: 'Module' }));

const goroutineScheduling = "The runtime employs what is known as an \"M:N scheduling strategy\", mapping multiple goroutines onto a smaller pool of OS threads. \n\nThe runtime uses logical processors, or \"P\"s, that maintain queues of ready-to-run goroutines. When a goroutine gets blocked (for example, due to I/O) the scheduler can quickly replace it with another goroutine from the queue, optimizing CPU resources. \n\nOn top of everything, channels further improve this model by serving as built-in communication and synchronization mechanisms. They allow goroutines to exchange data safely and implicitly handle blocking; if a goroutine sends data on a channel without an available receiver, it will wait until one is ready, reducing the need for explicit locks. \n\nThis design not only prevents common concurrency issues like race conditions but also simplifies coordination among goroutines, allowing for a simpler, and more powerful multi-threading model. ";

const __vite_glob_1_317 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: goroutineScheduling
}, Symbol.toStringTag, { value: 'Module' }));

const jsonProcessing = "Go simplifies processing json data with the encoding/json package. \n\nThis example shows how to unmarshal some JSON into a struct:\n\n```go\npackage main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n)\n\ntype User struct {\n    Name string `json:\"name\"`\n    Age  int    `json:\"age\"`\n}\n\nfunc main() {\n    jsonData := `{\"name\": \"Jane\", \"age\": 28}`\n    var user User\n    if err := json.Unmarshal([]byte(jsonData), &user); err != nil {\n        fmt.Println(\"Error parsing JSON:\", err)\n    }\n    fmt.Printf(\"User: %+v\\n\", user)\n}\n```\n\nThe JSON data, which is just a string at the beginning of this example gets parsed and turned into an actual complex variable that you can refer to and use in your code later on. ";

const __vite_glob_1_318 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: jsonProcessing
}, Symbol.toStringTag, { value: 'Module' }));

const lowLevelPointers = "Go uses pointers to store addresses of other values in memory. This allows for efficient allocation of memory resources and low-level data manipulation, which directly translates into optimized low-level code by the compiler. \n\nAs a result of this, operations with pointers are fast and while they might also be more complex, and require extra care from the developer, they contribute to a proper and efficient management of memory. ";

const __vite_glob_1_319 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: lowLevelPointers
}, Symbol.toStringTag, { value: 'Module' }));

const mapsUsage = "Maps in Go store key value pairs, making them ideal for tasks like caching, configuration, or counting frequencies. Anything that requires efficient data access either regarding CPU cycles (speed) or efficient management of the memory space is generally a great target for maps. ";

const __vite_glob_1_320 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: mapsUsage
}, Symbol.toStringTag, { value: 'Module' }));

const memoryAllocationGc = "In Go, the allocation of memory is managed by the runtime, which decides whether to allocate on the stack or heap based on variable declaration; this is defined during the phase known as \"escape analysis\".\n\nThe garbage collector then periodically reclaims memory, preventing leaks and ensuring efficient memory usage. ";

const __vite_glob_1_321 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: memoryAllocationGc
}, Symbol.toStringTag, { value: 'Module' }));

const memoryAllocation = "In Go, memory allocation is managed automatically by the runtime. It determines whether to place a variable on the stack or the heap based on how the variable is declared and used. For instance, short-lived variables might be stored on the stack, while data that needs to persist longer is allocated on the heap. To determine this, the Go compiler uses a process called \"escape analysis\", which examines how and where a variable is used. \n\nIf the compiler determines that a variable doesn't \"escape\" its current scope (i.e., it is not used outside the function or block in which it's declared), it can be safely allocated on the stack. On the other hand, if a variable does escape, it's moved to the heap, where the garbage collector manages its memory.\n\nThis system removes the need for devs to manually allocate or free memory, which helps reduce common errors like leaks and improper deallocation. ";

const __vite_glob_1_322 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: memoryAllocation
}, Symbol.toStringTag, { value: 'Module' }));

const memoryLeakPrevention = "Go has a garbage collection process that runs automatically and regularly frees up memory that is no longer in use. \n\nThis proactive approach helps identify bottlenecks in memory consumption and reduces the risk of leaks by removing the responsibility from the developer and taking control over how and when memory gets released. ";

const __vite_glob_1_323 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: memoryLeakPrevention
}, Symbol.toStringTag, { value: 'Module' }));

const memoryLeakStrategies = "Even with Go's efficient and automatic memory management in place things can still go wrong, and leaks can occur if developers are not careful with the resources they create. \n\nTo help you find and solve those memory issues, profiling tools and the runtime can help identify bottlenecks in memory usage. \n\nSome strategies to help you either avoid or deal with memory issues include careful variable declaration, proper cleanup to ensure, and monitoring garbage collection. In other words, be careful how you instantiate and use your resources, and use the proper tools to understand when there are problems. ";

const __vite_glob_1_324 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: memoryLeakStrategies
}, Symbol.toStringTag, { value: 'Module' }));

const memoryManagement = "Go's management of the memory space is handled automatically through garbage collection. \n\nThis process frees up memory that is no longer needed, preventing leaks. Given its automatic nature, the operation is overseen by Go's runtime, ensuring that cpu and memory remain optimized, which is a major advantage compared to the manual alternative that other languages like C or C++ have. ";

const __vite_glob_1_325 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: memoryManagement
}, Symbol.toStringTag, { value: 'Module' }));

const methodOverloading = "Go does not provide support for method overloading. That said, you can achieve similar functionality by using interfaces, variadic functions (functions that receive a variable amount of attributes), or simply by creating functions with different names that describe their behavior more clearly (like for instance \"PrintInt\" and \"PrintString\"). ";

const __vite_glob_1_326 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: methodOverloading
}, Symbol.toStringTag, { value: 'Module' }));

const methodSignatures = "A method signature in Go defines the method name, parameters, and return types (in fact, in most languages this is also the case). \n\nThis clarity ensures that the interface value can be implemented consistently, helping you create great code that interacts seamlessly with other functions and data structures. ";

const __vite_glob_1_327 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: methodSignatures
}, Symbol.toStringTag, { value: 'Module' }));

const multipleReturnValues = "Go allows functions to return multiple values, which is particularly useful for returning a result along with an error value. This feature simplifies how developers can handle errors and exceptions and ensures that your code directly manages outcomes from function executions. ";

const __vite_glob_1_328 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: multipleReturnValues
}, Symbol.toStringTag, { value: 'Module' }));

const packageMain = "In Go code, the package main declaration indicates that the file is meant to compile as an executable program. \n\nThe func main function, on the other hand, serves as the entry point where the program begins executing (similar to the main function on C). \n\nThis standard distinguishes Go applications from libraries in other languages. ";

const __vite_glob_1_329 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: packageMain
}, Symbol.toStringTag, { value: 'Module' }));

const pointerVariables = "A pointer in Go holds the address of another variable (much like pointers in other languages, like C). This connection to the memory sector enables efficient memory consumption because it allows direct access and manipulation of data without copying entire data structures. \n\nUnderstanding pointers is essential for low-level programming and for achieving optimal cpu and memory resource consumption. ";

const __vite_glob_1_330 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: pointerVariables
}, Symbol.toStringTag, { value: 'Module' }));

const pointersDetail = "Pointers in Go hold memory addresses, they're essentially a variable like any other with a special type of content inside it. This address inside the pointer allows you, the developer, to pass variables by reference instead of by value (because you're actually passing by value the addressed reference, without having to duplicate the actual value being referenced). \n\nThis is crucial if you expect to have efficient management of the memory space as modifying an existing object via its pointer affects the original value. ";

const __vite_glob_1_331 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: pointersDetail
}, Symbol.toStringTag, { value: 'Module' }));

const polymorphism = "In Go, you can define methods that accept parameters conforming to a specific interface. As long as a type implements the required interface, it can be passed to these methods, enabling polymorphism. ";

const __vite_glob_1_332 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: polymorphism
}, Symbol.toStringTag, { value: 'Module' }));

const reservedKeywords = "Reserved go keywords such as func, var, type, package, and import are fundamental for writing Go code. \n\nThese keywords define the structure and syntax of the language, ensuring that all your statements are correctly interpreted by the compiler. ";

const __vite_glob_1_333 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: reservedKeywords
}, Symbol.toStringTag, { value: 'Module' }));

const runtimeImpact = "The runtime controls how memory is allocated, garbage collection, and scheduling of lightweight threads (goroutines). \n\nOn top of that, it also ensures that functions and variable are optimized at the lowest abstraction level, providing efficiency across various operating systems. ";

const __vite_glob_1_334 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: runtimeImpact
}, Symbol.toStringTag, { value: 'Module' }));

const stringLiterals = "Raw string literals in Go are enclosed in backticks (`` ` ``) and preserve all formatting exactly as written. This is different from interpreted string literals, which process escape sequences like \\n. This distinction is particularly useful when you need to process data exactly as it is written.\n\nConsider a scenario where you need to embed an HTML template directly into your Go code. With raw string literals, you can include the HTML exactly as written without worrying about escaping characters or preserving the formatting. For example:\n\n```go\nhtmlTemplate := `<!DOCTYPE html>\n<html>\n    <head>\n        <title>Example</title>\n    </head>\n    <body>\n        <h1>Hello, World!</h1>\n    </body>\n</html>`\n```\n\nIn this case, the raw string literal enclosed in backticks preserves newlines, tabs, and any other whitespace exactly as you write them. ";

const __vite_glob_1_335 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: stringLiterals
}, Symbol.toStringTag, { value: 'Module' }));

const structPointers = "A pointer to an existing struct in Go holds the address of the struct, so modifying the struct through its pointer directly alters the original data, which can be efficient for large structs (because you can pass it around into functions without copying all of its content) but requires careful management to avoid unintended side effects (like with any other pointer-based operation). ";

const __vite_glob_1_336 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: structPointers
}, Symbol.toStringTag, { value: 'Module' }));

const structs = "A struct in Go is a composite data type that groups multiple values in a single place. \n\nYou define a struct using the type keyword, and then you can access its fields using dot notation. For example:\n\n```go\n// Define the struct\ntype Book struct {\n    Title  string\n    Author string\n}\n\nfunc main() {\n    myBook := Book{Title: \"Go in Action\", Author: \"William Kennedy\"}\n    // Access the properties through dot notation\n    fmt.Println(\"Book:\", myBook.Title, \"by\", myBook.Author)\n}\n``` ";

const __vite_glob_1_337 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: structs
}, Symbol.toStringTag, { value: 'Module' }));

const testingPackage = "Go's built in testing package simplifies writing unit tests for your Go code. \n\nBy creating test functions with the prefix Test and using several values for expected results, you can verify that your code behaves as expected. \n\nGenerally speaking, writing unit tests is crucial for code documentation and for ensuring that changes in one function don't affect the rest of the code.\n\nImagine having the following function:\n\n```go\npackage math\n\n// Add returns the sum of a and b.\nfunc Add(a, b int) int {\n    return a + b\n}\n```\n\nNow, using the built-in testing package, you can write a unit test for this function like this:\n\n```go\npackage math\n\nimport \"testing\"\n\nfunc TestAdd(t *testing.T) {\n    got := Add(2, 3)\n    want := 5\n    if got != want {\n        t.Errorf(\"Add(2, 3) = %d; want %d\", got, want)\n    }\n}\n```\n\nSimple, straightforward, and now the tests run through the go test command. ";

const __vite_glob_1_338 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: testingPackage
}, Symbol.toStringTag, { value: 'Module' }));

const typeConversionImportance = "Given how Go enforces operations to be performed on same-type-variables, explicit conversion between types ends up being necessary. \n\nThis mechanism reduces runtime errors and helps to make your code more predictable. ";

const __vite_glob_1_339 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: typeConversionImportance
}, Symbol.toStringTag, { value: 'Module' }));

const typeConversion = "Type conversion in Go is explicit, meaning that the developer needs to do it directly (i.e manually), ensuring that both operands share types before any operation is performed. \n\nSpecifically to convert a string like \"age\" into an int value, you can use the strconv package. ";

const __vite_glob_1_340 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: typeConversion
}, Symbol.toStringTag, { value: 'Module' }));

const unitTesting = "Writing unit tests using Go's built in testing package is quite straightforward and usually all code examples work as expected. Unit tests, in general, help document code behavior, making it easier to maintain and extend flexible and reusable code. ";

const __vite_glob_1_341 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: unitTesting
}, Symbol.toStringTag, { value: 'Module' }));

const valueReferenceTypes = "Value types, such as integers and structs, are copied when passed to functions. In contrast, reference types, including slices and maps, hold an address pointing to the original data (they're in fact, pointers) in memory. \n\nThis difference affects how data transfer happens and the logic behind how memory gets allocated, making it essential to understand when designing reusable code. ";

const __vite_glob_1_342 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: valueReferenceTypes
}, Symbol.toStringTag, { value: 'Module' }));

const variableDeclaration$1 = "Declaring variables in Go is very straightforward. You can use the var keyword or shorthand declaration inside a function. \n\nRegarding the \"zero value\" concept, uninitialized variables are automatically assigned what is known as a zero value, meaning they get assigned the value 0 or its equivalent for the corresponding type of the variable. For example, while a numeric variable might get a 0, a boolean one would get a \"false\" as a default value.\n\nThis feature simplifies coding and avoids unexpected behavior during data transfer between other functions. ";

const __vite_glob_1_343 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: variableDeclaration$1
}, Symbol.toStringTag, { value: 'Module' }));

const addMethodToObject = "Adding methods to an object allows you to keep your code organized and easy to reuse. One way to make this happen is by assigning a function to the object's property:\n\n```javascript\nvar obj = {\n        name: \"Cess\",\n        work: \"developer\",\n        countryVisits: 3\n};\n\n// assigning a function to the object's property\n\nobj.newMethod = function() {\n  console.log(\"Hello, I'm \" + this.name + \" and I work as a \" + this.work );\n};\n\nobj.newMethod(); // Hello, I'm Cess and I work as a developer\n``` ";

const __vite_glob_1_344 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: addMethodToObject
}, Symbol.toStringTag, { value: 'Module' }));

const addRemoveArrayItems = "Adding or removing items from an array using the `push()` and `pop()` methods:\n\n```javascript\n// using push() method\n\nlet coding = [\"Java\", \"JavaScript\"];\n\ncoding.push(\"React\"); \n\n\nconsole.log(coding); // [\"Java\", \"JavaScript\", \"React\"]\n\n\n// using pop() method\n\nlet coding = [\"Java\", \"JavaScript\"];\n\nlet removeJavaScript = coding.pop();\n\nconsole.log(coding); // ['Java']\n\nconsole.log(removeJavaScript); JavaScript\n``` ";

const __vite_glob_1_345 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: addRemoveArrayItems
}, Symbol.toStringTag, { value: 'Module' }));

const addingJavascriptToHtml = "## Advanced concepts\n\nYou can add JavaScript to an HTML file in three ways: **inline, internal, and external JavaScript**. Internal JavaScript lets you add code inside the HTML markup file between `<script>` tags. You can place internal JavaScript code inside the `<head>` or `<body>` section.\n\nInternal JavaScript is great for small amounts of code and keeps everything in one place. But it can mess up your HTML markup file and make it hard to read, especially if you have a lot of code.\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Practice</title>\n\n<!-- JavaScript -->\n\n<script>\n  console.log(\"Study Javascript\");\n</script>\n\n<!-- End  -->\n\n\n</head>\n<body>\n\n\n<!-- JavaSCript -->\n\n<script>\n    console.log(\"Hi, I'm Cess\");\n</script>\n\n<!-- End -->\n\n</body>\n</html>\n```\n\nAnother method is to create an external file for your JavaScript. It lets you write your JavaScript code in a separate .js extension and link it to your HTML code file. You can link to the external JavaScript in your HTML's `<head>` or `<body>` section.\n\nDoing this keeps your HTML clean and lets you use the same JavaScript code in many HTML pages. The downside is that it means an extra HTTP request to load the JavaScript file, which might slow down how fast your page loads.\n\nFor example, when you create a file called `app.js`, you'll include it like this:\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Practice</title>\n\n<!-- JavaScript -->\n\n<script src=\"app.js\"></script>\n\n<!-- End -->\n\n</head>\n\n<body>\n\n<!-- JavaSCript -->\n\n<script src=\"app.js\"></script>\n\n<!-- End -->\n\n</body>\n\n</html>\n```\n\nInline JavaScript lets you place your JavaScript code into an HTML element's attribute. You can do this using an HTML element's attribute, like onclick, onsubmit, and onselect.\n\nUsing inline JavaScript is suitable for fast and easy tasks. But it can make your HTML code difficult to read, especially if you have a lot of JavaScript code.\n\n```html\n<button onclick=\"console.log('A click occured')\">\n      Sign up on roadmap.sh\n</button>\n``` ";

const __vite_glob_1_346 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: addingJavascriptToHtml
}, Symbol.toStringTag, { value: 'Module' }));

const additionOperatorResult = "```javascript\nconsole.log(10 + 2 + \"9\"); // 129\n```\n\nJavaScript uses type coercion to convert values to the same type before operations. It'll first add both numbers 10 + 2 to get 12, and then try to add the number 12 to the string \"9\". Since you can't add a number and a string in JavaScript, it'll change the number 12 into a string \"12,\" i.e., \"12\" + \"9\" = \"129\" ";

const __vite_glob_1_347 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: additionOperatorResult
}, Symbol.toStringTag, { value: 'Module' }));

const arrayLoop = "Below is an example of looping through an array using the for loop method:\n\n```javascript\nlet coding = [\"java\", \"python\", \"JavaScript\"];\n\nfor (let i = 0; i < coding.length; i++) {\n  console.log(coding[i]);\n}\n\n// java\n\n// python\n\n// JavaScript\n``` ";

const __vite_glob_1_348 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: arrayLoop
}, Symbol.toStringTag, { value: 'Module' }));

const arrayMethods = "Array methods help you add, delete, or change elements **(values)** in an array. Some array methods to check out are: \n\n![JavaScript interview questions: Array methods](https://assets.roadmap.sh/guest/javascript-array-method-e4qa9.png)\n\n- **push()**: The push() method adds one or more elements to the end of an array and tells you the new length of the array in return.\n- **pop()**: The pop() method removes the last element from an array and returns that element.\n- **shift()**: The shift() method removes and returns the first element from an array.\n- **unshift()**: It adds one or more elements to the start of an array and tells you the new length of the array in return. ";

const __vite_glob_1_349 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: arrayMethods
}, Symbol.toStringTag, { value: 'Module' }));

const arraysCreation = "You use array literals with square brackets [] to create JavaScript arrays.\n\n![JavaScript interview questions: Arrays](https://assets.roadmap.sh/guest/javascript-arrays-v52bv.png)\n\n```javascript\nlet myArray = [firstArr, secondArr, thirdArr];\n``` ";

const __vite_glob_1_350 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: arraysCreation
}, Symbol.toStringTag, { value: 'Module' }));

const arrowFunctions = "Arrow functions are a shorter way to write functions in JavaScript, which came out in ES6 2015. It uses an arrow (`=>`) symbol to define (create) a function instead of the function keyword. Arrow functions bind \"this'' to the surrounding scope. This means they inherit the same meaning of the \"this\" keyword as the code around them. It makes it easier to work with variables, functions, objects, etc., outside the arrow function, but still accessible within it.\n\nRegular functions, on the other hand, bind the \"this\" keyword to the function itself. The \"this\" keyword changes based on how you call the function, but it can sometimes cause errors. For example, if you call a regular function as a method of an object, \"this\" will refer to that object. But if you call the same function as a standalone function, \"this\" will refer to the global object **(usually the window object in a browser)**.\n\n```javascript\n// arrow function with this\n\nfunction personName(name) {\n  this.name = name; \n  this.sayName = () => {\n  console.log(this.name); // 'this' is inherited from the surrounding context (constructor function: personName)\n  };\n}\n\nconst cess = new personName(\"cess\");\n\ncess.sayName(); // cess\n\n// regular function with this\n\nfunction Person(name) {\n  this.name = name; // Assigns the \"name\" parameter as the \"name\" property of the object you created.\n\n  this.sayName = function () {\n\nconsole.log(this.name); // Refers to the \"name\" property of the object that calls this function.\n  };\n}\n\nconst cess = new Person(\"cess\");\n\ncess.sayName(); // cess\n```\n\nIn arrow functions, if there is only one expression, you can skip the curly braces `{}` and the return keyword. It makes your code cleaner and easier for you and external developers to read. If you have two or more expressions, use the return keyword and put your code in curly braces `{}`**.**\n\n```javascript\n// regular function\n\nfunction doMath(a,b) {\n    return a + b;\n}\n\nconsole.log(doMath(200, 500)); // 700\n\n// arrow function \n\nconst doMath = (a, b) => a + b; // single expression\n\nconsole.log(doMath(200, 500)); // 700\n\n// multiple expression\n\nlet doMath = (a, b) => {\n  let result = a * b;\n  return result;\n};\n\nconsole.log(doMath(200, 500)); // 100,000\n``` ";

const __vite_glob_1_351 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: arrowFunctions
}, Symbol.toStringTag, { value: 'Module' }));

const asynchronousJavascript = "Asynchronous JavaScript is a way of writing code that can carry out many tasks at once. It saves you time, especially when working on tasks that take effort, like fetching data from a server.\n\nAsync JavaScript lets your code run at the same time as other tasks while waiting for it to complete. Your code doesn't stop and wait for a task to finish, but it keeps checking now and then to see if the task is complete. Once it's done, either a promise or a callback function responds to the result of the task. ";

const __vite_glob_1_352 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: asynchronousJavascript
}, Symbol.toStringTag, { value: 'Module' }));

const bom = "The BOM is a set of tools that allows JavaScript to interact with the browser. It controls browser functionalities without needing to interact with the HTML document. You can open and close a browser window, access a browsing history, and more. Examples of the BOM include window, browser, and history objects.\n\n![JavaScript interview questions: Types of web storage](https://assets.roadmap.sh/guest/types-of-web-storage-17ceh.png) ";

const __vite_glob_1_353 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: bom
}, Symbol.toStringTag, { value: 'Module' }));

const callbackHigherOrderFunctions = "A callback function is a function that one function gives to another as an argument **(value)**. The second function then runs the callback function after it finishes its operation. Callbacks are often used with other functions to handle tasks like making API calls.\n\nIn the example below, the sendMessage function is a callback function because it's given **(passed)** to the sendNow function to run the code later.\n\n```javascript\nfunction sendMessage(message) {\n  console.log(\"Message: \" + message);\n}\n\nfunction sendNow(callback, message) {\n  callback(message);\n}\nsendNow(sendMessage, \"Hello, I'm learning JavaScript!\"); // Message: Hello, I'm learning JavaScript!\n```\n\nJust like callbacks, higher-order functions also work with other functions. It takes another function as an argument or returns a function as a result. They're often used to handle tasks like controlling asynchronous operations.\n\n```javascript\nfunction createMessage(prefix) {\n  return function (message) { // returns a new function\n    console.log(prefix + \" \" + message);\n  };\n}\n\nconst sendMessage = createMessage(\"Hello\"); // creates a new function\n\nsendMessage(\"Cess!\"); // Hello, Cess!\n``` ";

const __vite_glob_1_354 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: callbackHigherOrderFunctions
}, Symbol.toStringTag, { value: 'Module' }));

const checkObjectProperty = "There are different ways to check if an object has a specific property. The method you choose depends on what you want to check and why. I'll be using the `Object.hasOwn` method to check if an object has a property that belongs only to it, not to its parent or inherited prototype.\n\n```javascript\nvar obj = {\n        name: \"Cess\",\n        work: \"developer\",\n        countryVisits: 3,\n};\n\nconsole.log(Object.hasOwn(obj, \"name\")); // true\n\nconsole.log(Object.hasOwn(obj, \"developer\")); // false\n``` ";

const __vite_glob_1_355 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: checkObjectProperty
}, Symbol.toStringTag, { value: 'Module' }));

const clearArray = "There are several ways to clear an array in JavaScript. However, I'll focus on the three most common methods.\n\n```javascript\n// Setting the length of an array property to 0:\n\nlet num = [20, 30, 40, 50];\n\nnum.length = 0;\n\nconsole.log(num); // []\n\n// Using the splice() method:\n\nlet num = [20, 30, 40, 50];\n\nnum.splice(0, num.length);\n\nconsole.log(num); // []\n\n// Assigning an empty array:\n\nlet num = [20, 30, 40, 50]; \n\nnum = []; \n\nconsole.log(num); // []\n``` ";

const __vite_glob_1_356 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: clearArray
}, Symbol.toStringTag, { value: 'Module' }));

const constructorFunction = "A constructor function creates multiple objects with the same properties and methods. Using the \"new\" keyword with a constructor function creates a new object and sets \"this\" to that object.\n\nIt's usually a good idea, but not required, to start the name of a constructor function with a capital letter. Doing this helps differentiate constructor functions from your regular functions and variables.\n\n```javascript\nfunction myDetails(name, visits) {\n  this.name = name; // Set the name parameter to the object\n  this.visits = visits; // Set the visits parameter to the object\n\n\n\n  this.newDetails = function () {\n    console.log(\n      `Hi, I'm ${this.name} and I have visited ${this.visits} countries.`\n    );\n  };\n}\n\n// Create objects using the constructor \n\nlet runDetails = new myDetails(\"Cess\", 2);;\n\nrunDetails.newDetails(); // Hi, I'm Cess and I have visited 2 countries.\n``` ";

const __vite_glob_1_357 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: constructorFunction
}, Symbol.toStringTag, { value: 'Module' }));

const cssSelectorsJavascript = "## Advanced concepts\n\nThere are several methods to manipulate HTML elements using CSS style selectors. But I'll be using the `document.getElementById` to style a paragraph element with an `ID=\"styleP\"`\n\n```html\n<p id=\"styleP\">\n      Top JavaScript interview questions for web developers\n</p>\n```\n\n```javascript\n// Get the HTML element with the ID \"styleP\"\n\nconst styleP = document.getElementById(\"styleP\");\n\n\n// Apply styles to the element\n\nstyleP.style.color = \"red\"; \nstyleP.style.border = \"3px solid black\";\n\nconsole.log(styleP.style); ";

const __vite_glob_1_358 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cssSelectorsJavascript
}, Symbol.toStringTag, { value: 'Module' }));

const destructuring = "Destructuring lets you take out values from arrays or objects and put them into separate variables. It makes your code easier to read and reduces mistakes when writing code. You don't have to deal with extra variables; what you assign to each variable is obvious.\n\n```\n// list of languages\n\nlet pLang = [\"Java\", \"JavaScript\", \"Python\"]\n\n// using destructuring to take out each language into separate variable:\n\nlet [pLang1, pLang2, pLang3] = pLang;\n\nconsole.log(pLang1); // Java\n\nconsole.log(pLang2); // JavaScript\n\nconsole.log(pLang3); // Python\n``` ";

const __vite_glob_1_359 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: destructuring
}, Symbol.toStringTag, { value: 'Module' }));

const dom = "The DOM is a structured representation of a webpage's elements **(HTML or XML page)**. Whenever an HTML page loads, the web browser creates a DOM for that page. It's a way for JavaScript to understand and change a webpage's content, layout, and style.\n\n![JavaScript interview questions: The DOM](https://assets.roadmap.sh/guest/document-object-model-in-javascript-8qryb.png)\n\nThe DOM represents the web page as a tree-like structure of objects. Each web page element, like paragraphs and images, becomes an object in this tree. JavaScript uses the DOM to manipulate these objects and make the webpage interactive.\n\nFor example, imagine you're watching a JavaScript tutorial on YouTube that you enjoy and decide to click the \"like\" button. When you click the \"like\" button, the text changes to \"unlike,\" and the like counter goes up. JavaScript accesses and changes the DOM to update the button's text from \"like\" to \"unlike.\" ";

const __vite_glob_1_360 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dom
}, Symbol.toStringTag, { value: 'Module' }));

const equalityOperators = "\"==\" and \"===\" are comparison operators, but they are different in how they treat type coercion. The \"==\" comparison operator checks if the values are the same, but doesn't care about the data type.\n\nThe \"===\" comparison operator, on the other hand, checks if both the value and the data type are the same.\n\n```\nconsole.log(50 == \"50\"); True: string \"50\" is converted to number 50\n\nconsole.log(50 === \"50\"); False: false, no type coercion due to different data types\n``` ";

const __vite_glob_1_361 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: equalityOperators
}, Symbol.toStringTag, { value: 'Module' }));

const errorMonitoring = "Keeping track of errors in your JavaScript application is important, especially when it's up and running and people are using it. This will allow you to find and correct mistakes to make your application reliable and easier to use.\n\nThese methods will help you keep tabs on what's happening with your application once it's in production:\n\n- **Try-Catch Blocks**: Use a try...catch block to catch errors before they cause your application to crash.\n- **Track uncaught errors**: Use a window.oneerror to catch errors outside a try...catch block.\n- **External services**: Use external services like Sentry to track errors in production.\n- **Send errors to a server**: Use AJAX or fetch API to send error data to the server for analysis. ";

const __vite_glob_1_362 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: errorMonitoring
}, Symbol.toStringTag, { value: 'Module' }));

const evenOddCheck = "One way to check if a number is even or odd is by creating a function using the modulus operator (`%`). It's a mathematical operation that helps find the remainder of a division problem.\n\nIn the example below, the number used for the division is \"2\", which is already an even number. If the remainder of dividing a number by \"2\" is \"0\", then it's an even number. But if the remainder is not \"0\", it's an odd number.\n\n```javascript\nfunction EvenOrOddNum(num) {\n\n  if (num % 2 === 0) {\n    return `${num} is even`;\n  } else {\n    return `${num} is odd`;\n  }\n}\n\nconsole.log(EvenOrOddNum(30)); // 30 is even\n\nconsole.log(EvenOrOddNum(31)); // 31 is odd\n``` ";

const __vite_glob_1_363 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: evenOddCheck
}, Symbol.toStringTag, { value: 'Module' }));

const functionDeclarationsExpressions = "A function declaration is a statement used to create functions in JavaScript. It starts with the function keyword followed by the function name and parameters. As long as you stick to the naming conventions, you can provide your function or parameters with any name you want. Also, function declarations are \"hoisted,\" meaning you can call them before they're defined.\n\n```javascript\nfunction functionName(parameters) {\n        // Body of the function\n}\n```\n\nA function expression is also a statement, defining a function as an expression. It starts with you declaring a variable such as let, const, or var, followed by an assignment operator (=), and it doesn't need a name **(an anonymous function)** unless you give it one. Also, they are not \"hoisted,\" meaning you can only use them after you define them, or you'll get an error.\n\n```javascript\nlet variableName = function(parameters) {\n        // Body of the function\n}\n\n// The variableName will act as the function name in a function expression.\n``` ";

const __vite_glob_1_364 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: functionDeclarationsExpressions
}, Symbol.toStringTag, { value: 'Module' }));

const functionScope = "Function scope refers to the scope of variables defined within a function. You can only access variable values within the scope and not outside. It helps to avoid having the same variable names and keeps your JavaScript code clean.\n\n```javascript\nfunction myStudyPlan() { \n\nvar studyPlanOne = \"Top JavaScript interview questions for web developers\";\n\nlet studyPlanTwo = \"Top JavaScript interview questions for web developers\";\n\nconst studyPlanThree = \"Top JavaScript interview questions for web developers\"; \n\n\n\nconsole.log(studyPlanOne); \n\nconsole.log(studyPlanTwo);  \n\nconsole.log(studyPlanThree); \n\n} \n\nmyStudyPlan(); // Calls the function ";

const __vite_glob_1_365 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: functionScope
}, Symbol.toStringTag, { value: 'Module' }));

const globalLocalScope = "Global scope is all the variables you can access from anywhere in your JavaScript code. When you declare a variable outside of any function or block, it becomes a global variable. Using too many global variables can make your code difficult to read.\n\n![JavaScript interview questions: Global scope and local scope](https://assets.roadmap.sh/guest/global-scope-vs-local-scope-0wnm4.png)\n\nIn contrast, local scope is a variable you can only access within a function. When you declare a variable inside any function or block of code, it becomes a local ****variable. It helps to organize your JavaScript code, making it easier to read. When coding in JavaScript, try to use local scope variables instead of global scope variables as much as possible. ";

const __vite_glob_1_366 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: globalLocalScope
}, Symbol.toStringTag, { value: 'Module' }));

const globalObject = "Global objects are containers for the global scope and its properties, e.g., variables. You can access its properties from anywhere within your code. In a web browser, the global object is the **\"window,\"** while in Node.js, it is **\"global.\"** ";

const __vite_glob_1_367 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: globalObject
}, Symbol.toStringTag, { value: 'Module' }));

const hoisting = "Hoisting is when a variable or function declaration gets moved to the top of its scope before the code runs. It means you can use a variable or function before you create (declare) it.\n\n```javascript\nconsole.log(hoistedVariable); // undefined\n\nvar hoistedVariable = \"initialized var hoistedVariable\";\n\nconsole.log(hoistedVariable); // correct value\n```\n\nIn the example above, I used the variable **\"hoistedVariable\"** in the first console.log before creating it. Often, this would cause an error, but due to hoisting, it will show **\"undefined.\"** The computer will move the variable creation var hoistedVariable to the top, but won't move the variable value. When I assign the value to the variable, the second console.log will show the correct answer.\n\n![JavaScript interview questions: Hoisting](https://assets.roadmap.sh/guest/hoisting-in-javascript-7nbhj.png)\n\nThe **\"let\"** and **\"const\"** keywords don't work well with hoisting. Even though they're moved to the top of their scope, they don't get a value right away. It creates a **\"temporal dead zone\"** where you can't access the variables until they're declared (created). If you try to use **\"let\"** or **\"const\"** variables before declaring them, you'll get a \"ReferenceError.\" ";

const __vite_glob_1_368 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: hoisting
}, Symbol.toStringTag, { value: 'Module' }));

const iife = "Immediately invoked function expressions, or IIFEs, run as soon as they're created. It creates a local scope for variables so they don't mess with other parts of the code. You make an IIFE by placing your code inside the parentheses (). Also, adding another set of parentheses () at the function's end will make it run immediately.\n\n```javascript\n// Syntax\n\n(function () {\n        // write your code here\n}());\n\n// Example\n\n(function () {\n  console.log(\n    \"roadmap.sh helps prepare for  JavaScript job interview questions\"\n  );\n})(); ";

const __vite_glob_1_369 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: iife
}, Symbol.toStringTag, { value: 'Module' }));

const importsExports = "## Advanced concepts\n\nUsing \"import\" and \"export\" makes sharing code among many files easier. The \"export\" keyword shares code and data like variables, classes, and functions. On the other hand, the \"import\" keyword brings in these values, so you can use them in a different file.\n\nFor example, you have two files called `function.js` and another file called `app.js`. `app.js` contains the original code you want to move to function.js using import and export.\n\nYou'll need to create an HTML page and link it to `function.js` instead of `app.js`. This is because `app.js` contains the original code but cannot run on its own. Also, make sure to add function.js to the HTML with the type attribute set to **\"module\"** to prevent errors from occurring.\n\n```html\n<!-- Link to HTML with type=\"module\" attribute -->\n\n<script type=\"module\" src=\"function.js\"></script>\n```\n\n```javascript\n// Export the function in file 1 \"app.js\"\n\nexport function studyJs(course) {\n  return `Read the JavaScript guide on, ${course}`;\n}\n\n\n// In file 2 the \"js import\" statement brings the \"studyJs\" function from \"app.js\" to \"function.js\"\n\nimport { studyJs } from './app.js';\n\nconsole.log(studyJs(\"roadmap.sh\")); // Read the JavaScript guide on, roadmap.sh ";

const __vite_glob_1_370 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: importsExports
}, Symbol.toStringTag, { value: 'Module' }));

const innerhtmlVsInnertext = "## Advanced concepts\n\ninnerHTML is what you use to get or change the HTML content of an element. It shows you the plain text and the HTML tags used to create the text. For example, if you have a paragraph with an italics tag, innerHTML will show the em tags in the final result.\n\n```html\n<p id=\"text\">\n  <em>\n      JavaScript interview questions\n </em>\n</p>\n```\n\n```javascript\nlet textOne = document.getElementById(\"text\");\n\nconsole.log(textOne.innerHTML); // <em>JavaScript interview questions</em>\n```\n\nOn the other hand, innerText gets or changes the plain text inside an element. It shows you the text on the page but not the HTML tags used to create the text.\n\n```html\n<p id=\"text\">\n  <em>\n      JavaScript interview questions\n </em>\n</p>\n```\n\n```javascript\nlet textOne = document.getElementById(\"text\");\n\nconsole.log(textOne.innerText); // JavaScript interview questions\n``` ";

const __vite_glob_1_371 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: innerhtmlVsInnertext
}, Symbol.toStringTag, { value: 'Module' }));

const isnanFunction = "You use the isNaN function to check when a value is **\"Not a Number.\"** It attempts to convert the given value to a number and then checks if the result is a NaN. If the value is not a number, it'll return true, but if it is a number, it'll return false.\n\n```javascript\nconsole.log(isNaN(\"study\")); // true\n\nconsole.log(isNaN(4)); // false\n``` ";

const __vite_glob_1_372 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: isnanFunction
}, Symbol.toStringTag, { value: 'Module' }));

const javaVsJavascript = "Java and JavaScript are different programming languages in terms of syntax and uses. [Java](https://roadmap.sh/java) is a programming language that Sun Microsystems created in the '90s and is now owned by Oracle. It is a general-purpose, object-oriented programming language often used for building software. Examples of this software include desktop, web apps, and mobile apps for Android. \n\nJava is also a statically typed language, meaning a variable's data type must be known at compile time. Before starting the program, you must understand what kind of data you're working with.\n\nIn contrast, Brendan Eich created JavaScript, a scripting language, at Netscape in 1995. It is a dynamically typed language, meaning that a variable's data type is determined at runtime. You do not have to declare the data type of a variable before using it. Check out the guide on the [differences between Java and JavaScript](https://roadmap.sh/java/vs-javascript) to learn more. ";

const __vite_glob_1_373 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: javaVsJavascript
}, Symbol.toStringTag, { value: 'Module' }));

const javascriptDataTypes = "Primitive and non-primitive data types are the two main data types in JavaScript. Primitive data types are the main elements that make up all the data you work with in JavaScript. They are immutable, meaning you can't change their values once you create them. Also, they're stored in memory as single values. Some examples of primitive data types include:\n\n- Number (numeric values, e.g., 78).\n- String (text values, e.g., \"hey\").\n- Boolean values (true or false).\n- Null\n- Undefined\n- Symbols\n\n![JavaScript interview questions: Data types](https://assets.roadmap.sh/guest/javascript-data-types-5r91t.png)\n\nNon-primitive data types, also called reference data types, store groups of data or complex structures. They are mutable, meaning you can change their values once you create them. Unlike primitive data types, they're stored in memory as references rather than single values. Some examples of non-primitive data types include:\n\n- Object (collection of key-value pairs, e.g., { name: 'cess', age: 26 };).\n- Array (e.g., [10, 12, 13]).\n- Function (e.g., function add(a = 10, b = 5) { return a + b; }). ";

const __vite_glob_1_374 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: javascriptDataTypes
}, Symbol.toStringTag, { value: 'Module' }));

const javascriptEnding = "## Wrapping up\n\nLearning JavaScript is a continuous process that requires regular practice, self-assessment, and dedication. By studying the JavaScript interview questions and answers above, you have made considerable progress in improving your skills and confidence.\n\nFeel free to mix it up during your study hours by asking different questions and using various scenarios. It'll make you feel more at ease and ready for whatever JavaScript interview questions you might see in actual interviews.\n\nSet aside time each day or week to practice coding problems, work on your projects, and study. Also, jot down notes, make summaries, or even teach someone else. Doing this will solidify your learning and show you where you need extra work.\n\nTo improve at JavaScript and find more helpful resources, check out the [JavaScript guide](https://roadmap.sh/javascript) on [roadmap.sh](http://roadmap.sh). It has valuable resources to help you learn and prepare for JavaScript interviews.\n\n";

const __vite_glob_1_375 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: javascriptEnding
}, Symbol.toStringTag, { value: 'Module' }));

const javascriptFrameworks = "Listed below are some common JavaScript frameworks and their uses:\n\n- **Node.js**: Builds backend web apps and APIs.\n- **React**: Good for building single-page apps (SPAs), e.g., chat apps.\n- **Angular**: Building web apps like social media apps and features like user authentication. ";

const __vite_glob_1_376 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: javascriptFrameworks
}, Symbol.toStringTag, { value: 'Module' }));

const logicalError = "A logical error is when your code runs without syntax or reference errors. But when it runs, it won't do what you want it to because of a mistake in how you wrote it.\n\nSuppose you're trying to add two numbers together in a function. But instead of using the plus sign, you use the multiplication sign by mistake. The code will still run, but you won't get your desired answer. ";

const __vite_glob_1_377 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: logicalError
}, Symbol.toStringTag, { value: 'Module' }));

const objectCreate = "To create a new object using `Object.create()` method, here's an example that demonstrates it in action\n\n```javascript\n// Create a parent object \n\nlet myDetails = { \n    newDetails: function () {\n        console.log(\n            `Hello, I'm ${this.name} and I have traveled to ${this.visits} countries`\n        );\n} \n}; \n\n// Create a new object using Object.create() with myDetails as prototype\n\nlet runDetails = Object.create(myDetails); \n\n\n// Add properties to the new object\n\nrunDetails.name = \"Cess\"; \n\nrunDetails.visits = 2; \n\n// Using inheritance method\n\nrunDetails.newDetails(); // Hello, I'm Cess and I have traveled to 2 countries\n``` ";

const __vite_glob_1_378 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: objectCreate
}, Symbol.toStringTag, { value: 'Module' }));

const prototypeInheritance = "Prototype inheritance is when objects can inherit properties and methods from other objects. Each item has a \"prototype,\" i.e., the parent object. Whenever you want to use a property or method on an object, JavaScript first checks if it has it. If not, it looks at the object's prototype to see if it has it. If the prototype has it, then the object \"inherits\" it. This process continues until it finds the property it's looking for or hits the end of the prototype chain.\n\nFor example, Date objects, like timestamps, inherit their properties and methods from the Date prototype. Math objects provide existing tools and features for math tasks, but do not rely on or inherit from a Math prototype. Array objects, like lists, get their features and actions from the Array prototype. ";

const __vite_glob_1_379 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: prototypeInheritance
}, Symbol.toStringTag, { value: 'Module' }));

const recursiveFunction = "A recursive function is a function that calls itself to solve a particular problem. It breaks down a big problem into smaller parts with each call and solves them one by one. The function has two main parts: the base case, which stops the repetition, and the recursive case, which repeats the steps until it reaches the base.\n\n```javascript\nfunction myArray(arrOld) {\n\n// Base case: empty array \n\nif (arrOld.length === 0) {\n        return 0;\n    }\n    else {\n        // Recursive case: Add the first element + sum of the rest arrays\n                return arrOld[0] + myArray(arrOld.slice(1));\n        }\n}\n\nlet newArray = [20, 30, 40, 50]; \n\nconsole.log(myArray(newArray)); // 140\n``` ";

const __vite_glob_1_380 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: recursiveFunction
}, Symbol.toStringTag, { value: 'Module' }));

const referenceVsSyntaxError = "A syntax error happens when you write code that the JavaScript engine can't understand, so your code won't run. It can be when you make a typo spelling a keyword or forget to close a bracket, parenthesis, or curly brace.\n\n![JavaScript interview questions: Error handling](https://assets.roadmap.sh/guest/types-of-errors-in-javascript-9nl2m.png)\n\n```javascript\nconsole.log(\"JavaScript interview questions\"\n```\n\nA reference error occurs when you try to use a variable or a function that doesn't exist. The code will run, but it won't find what you're referencing since you didn't create the variable using let, var, and const keywords.\n\n```javascript\nconsole.log(myStudy);\n``` ";

const __vite_glob_1_381 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: referenceVsSyntaxError
}, Symbol.toStringTag, { value: 'Module' }));

const removeDuplicates = "You can use the `filter()`, `reduce()` method, and more to remove duplicates from an array. I'll be using the `set()` method as an example:\n\n```javascript\nlet myArray = [30,30,30,40,50,50,60,60];\n\nlet newArray = [...new Set(myArray)]; // removes duplicates and converts back to an array\n\nconsole.log(newArray); //  [30, 40, 50, 60]\n``` ";

const __vite_glob_1_382 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: removeDuplicates
}, Symbol.toStringTag, { value: 'Module' }));

const restParameter = "The rest parameter allows you to represent many arguments in an array. It's useful when you need a function to accept extra arguments beyond what you've listed. \n\n![JavaScript interview questions: rest parameter](https://assets.roadmap.sh/guest/javascript-rest-parameter-lbzht.png)\n\nThe \"rest parameter\" syntax consists of three dots (`...`) followed by the name of a parameter. Also, if you're using a rest parameter with other values, make sure it's the last one on the list.\n\n```javascript\nfunction functionName(...restParameter) {\n    // Body of the function\n}\n\n// Example 2\n\nfunction functionName(value1, value2, ...restParameter) {\n    // Body of the function\n}\n``` ";

const __vite_glob_1_383 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: restParameter
}, Symbol.toStringTag, { value: 'Module' }));

const reverseStringFunction = "You can reverse a string using the `split()`, `reverse()`, and `join()` method.\n\n```javascript\nfunction reverseMyString(str) {\n  return str.split(\"\").reverse().join(\"\");\n}\n\nlet myString = \"Learn JavaScript\";\n\nlet reverseString = reverseMyString(myString);\n\nconsole.log(reverseString); // tpircSavaJ nraeL\n``` ";

const __vite_glob_1_384 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: reverseStringFunction
}, Symbol.toStringTag, { value: 'Module' }));

const spreadArrayOutput = "```javascript\nconst arr1 = [1,2,3];\n\nconst arr2 = [...arr1, 4, 5, 6];\n\nconsole.log(arr2); // what ?\n\nconsole.log(arr2); // [1, 2, 3, 4, 5, 6]\n``` ";

const __vite_glob_1_385 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: spreadArrayOutput
}, Symbol.toStringTag, { value: 'Module' }));

const spreadOperatorObjects = "The spread operator (`...`) allows you to merge objects through a function call or directly combine objects. Below is an example using a function call:\n\n```javascript\nfunction mergeObj(firstObj, secondObj) {\n        return {...firstObj, ...secondObj} // merge both objects\n}\n\nlet firstObj = { name: \"cess\", city: \"Lagos\"};\n\nlet secondObj = {occupation: \"developer\", countriesVisited: 2};\n\nlet newObj = mergeObj(firstObj, secondObj);\n\nconsole.log(newObj); // {name: 'cess', city: 'Lagos', occupation: 'developer', countriesVisited: 2}\n``` ";

const __vite_glob_1_386 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: spreadOperatorObjects
}, Symbol.toStringTag, { value: 'Module' }));

const strictMode$1 = "## Advanced concepts\n\nJavaScript's strict mode makes you follow strict rules **(best practices)** when writing code. It prevents common mistakes JavaScript often ignores, such as undeclared variables, and keeps your code safe. Add the string `\"use strict\";` at the top of the JavaScript file or function to enable strict mode.\n\n```javascript\n// Without strict mode\n\ncourseNo = \"200\";\n\nconsole.log(courseNo); // 200\n\n// With strict mode\n\n\"use strict\";  // top of your JS file\n\ncourseNo= \"200\";\n\nconsole.log(courseNo); // courseNo is not defined i.e, you didn't create it using the var, const, or let keywords. \n\n\n// Strict mode: Functions\n\nfunction strictExample() { \n\n\"use strict\"; \n\ncourseNumber = \"200\"; //  Error: courseNumber is not defined\n\nconsole.log(courseNumber ); // code won't run\n\n} \n\nstrictExample(); // ReferenceError ";

const __vite_glob_1_387 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: strictMode$1
}, Symbol.toStringTag, { value: 'Module' }));

const substringCheck = "You can use different methods like `search()` or `indexOf()` to see if a string has a particular word. But I'll use the includes() method to check if a string contains a specific substring. It'll return \"true\" if the substring is present in the string and \"false\" if not.\n\n```javascript\nfunction findSubstring(mainString, substring) {\n  return mainString.includes(substring);\n}\n\nconsole.log(findSubstring(\"Learn JavaScript\", \"JavaScript\")); // True - It contains JavaScript\n\nconsole.log(findSubstring(\"Learn JavaScript\", \"Python\")); // False - It doesn't contain Python\n``` ";

const __vite_glob_1_388 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: substringCheck
}, Symbol.toStringTag, { value: 'Module' }));

const thisKeyword = "The \"this\" keyword in JavaScript refers to the object or context on which a code runs. Examples of these codes include function calls, object methods, event handlers, and more. You use it to access the properties and methods of that object. The value of this keyword changes depending on how you use (or call) the function.\n\n![JavaScript interview questions: the this keyword](https://assets.roadmap.sh/guest/the-this-keyword-ohsom.png)\n\nWhen you use \"this\" in the context of a method, \"this\" indicates the object that owns the method. For standalone functions, \"this\" is the global object, but in strict mode it's undefined. Also, in event handlers, \"this\" refers to the element that caused the event. ";

const __vite_glob_1_389 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: thisKeyword
}, Symbol.toStringTag, { value: 'Module' }));

const undefinedVsNull = "Undefined variables are variables that the developer has declared but not yet assigned a value. \n\n```javascript\n// Example 1\n\nlet study;\n\nconsole.log(study); // undefined var\n\n// Example 2\n\nlet myObj = {}; // empty object\n\nconsole.log(myObj.name); // undefined because name does not exist\n```\n\nA null variable is a variable or property that is empty. You use null variables when you want to show that a variable has no values or want to clear the value of a variable.\n\n```javascript\n// Example 1\n\nlet study = null;\n\nconsole.log(study); // null\n\n// Example 2\n\nlet obj = {\n    name: \"cess\",\n};\n\nobj.name = null;\n\nconsole.log(obj.name); // null\n``` ";

const __vite_glob_1_390 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: undefinedVsNull
}, Symbol.toStringTag, { value: 'Module' }));

const variableDeclaration = "A variable declaration is when you create a variable to store a value in JavaScript. You give it a descriptive name, which you can then use to store or retrieve the value. In JavaScript, you use **var, let, and const** keywords to declare variables.\n\n![JavaScript interview questions: Declaring variables](https://assets.roadmap.sh/guest/variable-declarations-in-javascript-r8f7v.png)\n\nOlder versions of JavaScript used the var keyword to declare variables**.** Variables declared using the var keyword have a function scope. It lets you give variables the same name and a new value even in the same scope. However, it may result in confusion and errors, making debugging your code difficult.\n\n```javascript\nvar course = \"java\";\n\nvar course = \"JavaScript interview questions\"; // No error\n\nconsole.log(course); // JavaScript interview questions\n```\n\nThe let keyword is a new way to declare variables in JavaScript in ECMAScript 2015 (ES6). Variables declared using the let keyword have a block scope. You can change the value, but you can't use the same name for a variable in the same block scope. It helps make debugging code easier compared to the var keyword.\n\n```javascript\nlet course = \"java\";\n\nlet course = \"JavaScript interview questions\"; \n\nconsole.log(course);// Identifier 'course' has already been declared\n\n\n\n// Example 2\n\nlet course = \"java\";\n\ncourse = \"JavaScript interview questions\"; \n\nconsole.log(course);// JavaScript interview questions\n```\n\nThe const keyword works as the let keyword since both are block-scoped. However, you cannot change the value or use the same name for a variable in the same scope.\n\n```javascript\nconst course = \"java\";\n\ncourse = \"JavaScript interview questions\"; \n\n// Error: Assignment to constant variable.\n``` ";

const __vite_glob_1_391 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: variableDeclaration
}, Symbol.toStringTag, { value: 'Module' }));

const variableNamingConventions = "The following are the naming conventions for variables in JavaScript:\n\n- Write variable names in camelCase. Use lowercase letters to begin the variable name and then uppercase for each new word, e.g., myName.\n- Use descriptive variable names. Instead of using \"p\" as a variable name for a password, use userPassword instead.\n- Don't use JavaScript keywords such as if, for, or while as variable names.\n- Don't include special characters like punctuation and math operators in your variable names. Only use underscores (_) and dollar signs ($).\n- Don't start variable names with numbers; instead, place them at the end. For example, you can't have 99myName, but myName99 is okay. ";

const __vite_glob_1_392 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: variableNamingConventions
}, Symbol.toStringTag, { value: 'Module' }));

const windowVsDocument = "A window object represents the entire browser or tab. It controls everything on the page, from loading content to responding to your clicks. The window object is a topmost object that helps manage the browser window.\n\nIn contrast, the document object is a window property. The document object represents the web page's content **(HTML document)** you're looking at in the browser, such as the text. It enables you to interact with, change, and style web elements such as paragraphs using methods like `getElementById()`. ";

const __vite_glob_1_393 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: windowVsDocument
}, Symbol.toStringTag, { value: 'Module' }));

const commonjsVsEsm = "CommonJS and ES Modules are two different module systems in JavaScript. CommonJS is the module system used in Node.js, while ES Modules are the module system used in browsers and TypeScript.\n\n## CommonJS\n\n```js\nconst fs = require('fs');\n```\n\nCommonJS modules are loaded synchronously. This means that the module is loaded and evaluated before the code using the module is executed. It uses `require()` to load modules and `module.exports` to export modules.\n\n## ES Modules\n\n```js\nimport fs from 'fs';\n```\n\nES Modules are loaded asynchronously. This means that the module is loaded and evaluated when the module is used. It uses `import` to load modules and `export` to export modules.\n";

const __vite_glob_1_394 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: commonjsVsEsm
}, Symbol.toStringTag, { value: 'Module' }));

const errorHandling = "There are four fundamental strategies to report errors in Node.js:\n\n## `try...catch` blocks\n\n`try...catch` blocks are the most basic way to handle errors in JavaScript. They are synchronous and can only be used to handle errors in synchronous code. They are not suitable for asynchronous code, such as callbacks and promises.\n\n```js\nimport fs from 'node:fs';\n\ntry {\n  const data = fs.readFileSync('file.md', 'utf-8');\n  console.log(data);\n} catch (err) {\n  console.error(err);\n}\n```\n\n## Callbacks\n\nCallbacks are the most common way to handle errors in asynchronous code. They are passed as the last argument to a function and are called when the function completes or fails.\n\n```js\nimport fs from 'node:fs';\n\nfs.readFile('file.md', 'utf-8', (err, data) => {\n  if (err) {\n    console.error(err);\n    return;\n  }\n\n  console.log(data);\n});\n```\n\n## Promises\n\nPromises are a more modern way to handle errors in asynchronous code. They are returned by functions and can be chained together. They are resolved when the function completes and rejected when it fails.\n\n```js\nimport fs from 'node:fs/promises';\n\nfs.readFile('file.md', 'utf-8')\n  .then((data) => {\n    console.log(data);\n  })\n  .catch((err) => {\n    console.error(err);\n  });\n```\n\n## Event emitters\n\nEvent emitters are a more advanced way to handle errors in asynchronous code. They are returned by functions and emit an `error` event when they fail. They are resolved when the function completes and rejected when it fails.\n\n```js\nimport fs from 'node:fs';\n\nconst reader = fs.createReadStream('file.md', 'utf-8');\nreader.on('data', (data) => {\n  console.log(data);\n});\n\nreader.on('error', (err) => {\n  console.error(err);\n});\n```\n";

const __vite_glob_1_395 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: errorHandling
}, Symbol.toStringTag, { value: 'Module' }));

const exitCodes = "The following exit codes are used in Node.js:\n\n- `0`: Success\n- `1`: Uncaught Fatal Exception\n- `2`: Unused\n- `3`: Internal JavaScript Parse Error\n- `4`: Internal JavaScript Evaluation Failure\n- `5`: Fatal Error\n- `6`: Non-function Internal Exception Handler\n- `7`: Internal Exception Handler Run-Time Failure\n- `8`: Unused\n- `9`: Invalid Argument\n- `10`: Internal JavaScript Run-Time Failure\n- `12`: Invalid Debug Argument\n- `13`: Uncaught Exception\n- `14`: Unhandled Promise Rejection\n- `15`: Fatal Exception\n- `16`: Signal Exits\n";

const __vite_glob_1_396 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: exitCodes
}, Symbol.toStringTag, { value: 'Module' }));

const inputFromCommandLine = "In order to take user input from the command line, you can use the `readline` module. It provides an interface for reading data from a Readable stream (such as `process.stdin`) one line at a time.\n\n```js\nimport readline from 'node:readline';\nimport { stdin as input, stdout as output } from 'node:process';\n\nconst rl = readline.createInterface({ input, output });\n\nrl.question('What do you think of Node.js? ', (answer) => {\n  console.log(`Thank you for your valuable feedback: ${answer}`);\n  rl.close();\n});\n\nrl.on('close', () => {\n  console.log('\\nBYE BYE !!!');\n  process.exit(0);\n});\n```\n";

const __vite_glob_1_397 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: inputFromCommandLine
}, Symbol.toStringTag, { value: 'Module' }));

const orderPriority = "Order priorities of `process.nextTick`, `Promise`, `setTimeout` and `setImmediate` are as follows:\n\n1. `process.nextTick`: Highest priority, executed immediately after the current event loop cycle, before any other I/O events or timers.\n2. `Promise`: Executed in the microtask queue, after the current event loop cycle, but before the next one.\n3. `setTimeout`: Executed in the timer queue, after the current event loop cycle, with a minimum delay specified in milliseconds.\n4. `setImmediate`: Executed in the check queue, but its order may vary based on the system and load. It generally runs in the next iteration of the event loop after I/O events.\n\n```js\nconsole.log('start');\nPromise.resolve().then(() => console.log('Promise'));\nsetTimeout(() => console.log('setTimeout'), 0);\nprocess.nextTick(() => console.log('process.nextTick'));\nsetImmediate(() => console.log('setImmediate'));\nconsole.log('end');\n\n// Output:\n// start\n// end\n// process.nextTick\n// Promise\n// setTimeout\n// setImmediate\n```\n\nIn summary, the order of execution is generally `process.nextTick` > `Promise` > `setTimeout` > `setImmediate`. However, keep in mind that the behavior may vary in specific situations, and the order might be influenced by factors such as system load and other concurrent operations.\n";

const __vite_glob_1_398 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: orderPriority
}, Symbol.toStringTag, { value: 'Module' }));

const processArgv = "`process.argv` is an array containing the command-line arguments passed when the Node.js process was launched. The first element is the path to the Node.js executable, the second element is the path to the JavaScript file being executed, and the remaining elements are the command-line arguments.\n\n```js\nnode index.js hello world\n```\n\n```js\nconsole.log(process.argv);\n// [\n//   '/usr/local/bin/node', -> path to the Node.js executable\n//   '/Users/username/projects/nodejs/index.js', -> path to the JavaScript file being executed\n//   'hello', -> command-line argument\n//   'world' -> command-line argument\n// ]\n```\n";

const __vite_glob_1_399 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: processArgv
}, Symbol.toStringTag, { value: 'Module' }));

const processCwdVsDirname = "`process.cwd()` returns the current working directory of the Node.js process, while `__dirname` returns the directory name of the current module.\n\n```js\nconsole.log(process.cwd());\n// /Users/username/projects/nodejs\n\nconsole.log(__dirname);\n// /Users/username/projects/nodejs/src\n```\n";

const __vite_glob_1_400 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: processCwdVsDirname
}, Symbol.toStringTag, { value: 'Module' }));

const webServer = "To create a minimal `Hello, World!` HTTP server in Node.js, you can use the `http` module. It provides an HTTP server, and the createServer() method sets up a server instance with a callback function to handle incoming requests\n\n```js\nimport http from 'node:http';\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello World\\n');\n});\n\nserver.listen(3000, () => {\n  console.log('Server running at http://localhost:3000/');\n});\n```\n";

const __vite_glob_1_401 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: webServer
}, Symbol.toStringTag, { value: 'Module' }));

const componentLifecycle = "In React functional components, lifecycle-like behaviors are achieved using hooks:\n\n## Mounting and Unmounting\n\nUtilizing the useEffect hook with an empty dependency array ([]) ensures the hook runs after the component mounts to the DOM.\n\n```js\nuseEffect(() => {\n  // do something after component mounts\n  return () => {\n    // do something before component unmounts\n  };\n}, []);\n```\n\nThe cleanup function returned within the useEffect callback offers a mechanism for handling tasks when the component is about to **unmount**.\n\n## Updates\n\nThe useEffect hook, when invoked without a dependency array or with specific dependencies, executes after every render or when specified prop/state changes are detected.\n\n```js\nuseEffect(() => {\n  // do something after every render\n});\n```\n\n```js\nuseEffect(() => {\n  // do something after specific prop/state changes\n}, [state1, state2]);\n```\n";

const __vite_glob_1_402 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: componentLifecycle
}, Symbol.toStringTag, { value: 'Module' }));

const controlledVsUncontrolled = "A Controlled Component is one that takes its current value through props and notifies changes through callbacks like `onChange`. A parent component \"controls\" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a \"dumb component\".\n\nA Uncontrolled Component is one that stores its own state internally, and you query the DOM using a `ref` to find its current value when you need it. This is a bit more like traditional HTML.\n\nMost native React form components support both controlled and uncontrolled usage:\n\n```jsx\n// Controlled:\n<input type=\"text\" value={value} onChange={handleChange} />\n\n// Uncontrolled:\n<input type=\"text\" defaultValue=\"foo\" ref={inputRef} />\n// Use `inputRef.current.value` to read the current value of <input>\n```";

const __vite_glob_1_403 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: controlledVsUncontrolled
}, Symbol.toStringTag, { value: 'Module' }));

const createPortal = "`createPortal` is a method on the `ReactDOM` object. It is used to render a React element into another DOM element outside of the parent component. This is useful for cases like modals, popups, or tooltips where you want the component to break out of its container.\n\n```js\nReactDOM.createPortal(child, container);\n```\n\nThe first argument (`child`) is any renderable React child, such as an element, string, or fragment. The second argument (`container`) is a DOM element.\n\nThe `Modal` component below is a simple example of a modal component that uses `createPortal` to render its children into a DOM element with the id `root`. The `Modal` component is rendered as a child of the `App` component, but the modal itself is rendered outside of the `App` component.\n\n```js\nimport { createPortal } from 'react-dom';\n\nexport function Modal({ isOpen, onClose, children }) {\n  if (!isOpen) return null;\n\n  return createPortal(\n    <div\n      role=\"dialog\"\n      aria-modal=\"true\"\n      style={{\n        position: 'fixed',\n        top: '50%',\n        left: '50%',\n        transform: 'translate(-50%, -50%)',\n        backgroundColor: 'white',\n        padding: '20px',\n        zIndex: 1000,\n      }}\n    >\n      <button onClick={onClose} aria-label=\"Close Modal\">\n        Close\n      </button>\n      {children}\n    </div>,\n    document.getElementById('root')\n  );\n}\n```\n\nThe `Modal` component can be used like this:\n\n```js\nimport { useState } from 'react';\nimport { Modal } from './modal';\n\nexport function App() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <div>\n      <button onClick={() => setIsOpen(true)}>Open Modal</button>\n      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>\n        <h1>Modal Title</h1>\n        <p>Modal Content</p>\n      </Modal>\n    </div>\n  );\n}\n```\n";

const __vite_glob_1_404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: createPortal
}, Symbol.toStringTag, { value: 'Module' }));

const customHook = "**Custom hooks** are a mechanism for code reuse in React and allow you to extract component logic into reusable functions. Custom hooks can be used to share logic between components or to abstract away complex logic to make components more readable.\n\nLet's look at an example of a custom hook that return network status information:\n\n## Creating a Custom hook\n\nCustom hooks are named with the prefix `use` and can call other hooks if needed. They can also accept arguments and return values.\n\n```js\nimport { useState, useEffect } from 'react';\n\nfunction useNetworkStatus() {\n  const [isOnline, setIsOnline] = useState(true);\n\n  useEffect(() => {\n    function handleOnline() {\n      setIsOnline(true);\n    }\n\n    function handleOffline() {\n      setIsOnline(false);\n    }\n\n    window.addEventListener('online', handleOnline);\n    window.addEventListener('offline', handleOffline);\n\n    return () => {\n      window.removeEventListener('online', handleOnline);\n      window.removeEventListener('offline', handleOffline);\n    };\n  }, []);\n\n  return isOnline;\n}\n```\n\nThe custom hook above uses the `useState` and `useEffect` hooks to track the network status of the browser. It returns a boolean value that indicates whether the browser is online or offline.\n\n## Using a Custom hook\n\n```js\nfunction NetworkStatus() {\n  const isOnline = useNetworkStatus();\n\n  return (\n    <div>\n      <p>You are {isOnline ? 'online' : 'offline'}.</p>\n    </div>\n  );\n}\n```\n";

const __vite_glob_1_405 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: customHook
}, Symbol.toStringTag, { value: 'Module' }));

const errorBoundaries = "Error boundaries are special React components that catch JavaScript errors during rendering, in lifecycle methods, and during the constructor of whole tree below them. They are used to handle errors gracefully by displaying a fallback UI and preventing the entire application from crashing due to unhandled errors.\n\nYou can use [react-error-boundary](https://npm.im/react-error-boundary) package to create error boundaries in your application. It provides a `ErrorBoundary` component that you can wrap around any component that might throw an error. The `ErrorBoundary` component takes a `FallbackComponent` prop that is used to render a fallback UI when an error occurs.\n\n## Capturing Errors\n\n```js\nimport { ErrorBoundary } from 'react-error-boundary';\nimport { FetchData } from './FetchData';\n\nfunction ErrorFallback({ error, resetErrorBoundary }) {\n  return (\n    <div role=\"alert\">\n      <p>Something went wrong:</p>\n      <pre>{error.message}</pre>\n      <button onClick={resetErrorBoundary}>Try again</button>\n    </div>\n  );\n}\n\nexport function App() {\n  return (\n    <ErrorBoundary FallbackComponent={ErrorFallback}>\n      <FetchData />\n    </ErrorBoundary>\n  );\n}\n```\n\nThis `FetchData` component will throw an error when it is rendered, and the `ErrorBoundary` component will catch the error and display the `ErrorFallback` component.\n\n```js\nexport function FetchData() {\n  throw new Error('Error fetching data');\n  return <p>This will never render</p>;\n}\n```\n";

const __vite_glob_1_406 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: errorBoundaries
}, Symbol.toStringTag, { value: 'Module' }));

const flushSync = "The `flushSync` function in React is used to flush updates synchronously. It schedules updates to be performed inside a high-priority task, ensuring that the updates are executed immediately and synchronously before returning control to the caller.\n\n```js\nimport { flushSync } from 'react-dom';\n\nflushSync(callback);\n```\n\nThis is useful in situations where you need the DOM to be updated immediately, such as for measurements or to ensure synchronous rendering. However, excessive use of `flushSync` can lead to degraded performance, so it should be used judiciously.\n";

const __vite_glob_1_407 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: flushSync
}, Symbol.toStringTag, { value: 'Module' }));

const investigateSlowApp = "There are many reasons why an app might be slow. It could be due to a slow network, a slow backend, or a slow client. It could also be due to a memory leak, unnecessary re-renders, or large bundle sizes.\n\nHere are some tips to help you investigate and fix performance issues:\n\n## Use the React DevTools Profiler\n\nThe React DevTools Profiler helps you visualize how components render and identify costly renderings. It can also help you identify unnecessary re-renders.\n\n## Check for Unnecessary Renders\n\nEnsure that components don't render more often than needed. Be clear about the `useEffect` dependencies and avoid creating new objects or arrays every render, as these can trigger unnecessary child component renders. Tools like [why-did-you-render](https://npm.im/@welldone-software/why-did-you-render) can help spot unnecessary re-renders.\n\n## Analyze Bundle Size\n\nUse your production build to analyze your bundle size. Tools like [webpack-bundle-analyzer](https://npm.im/webpack-bundle-analyzer) or [source-map-explorer](https://npm.im/source-map-explorer) can help you see if large libraries or unused code is slowing down the initial load.\n\n## Optimize Images & Assets\n\nEnsure images are appropriately sized and use modern formats. Also, consider using CDNs for assets that don't change often.\n\n## Lazy Load Components\n\nUse `lazy()` and dynamic imports to split your bundle and load components only when they're needed. This can help reduce the initial load time.\n\n## Check Network Requests\n\nSlow API calls or fetching large amounts of data can affect performance. Optimize your backend, paginate data, or cache results. You can also use tools like [@tanstack/react-query](https://npm.im/@tanstack/react-query) or [swr](https://npm.im/swr) to help manage data fetching and caching.\n\n## Use Production Build for Testing\n\nEnsure you're testing the performance on a production build, as development builds are often slower due to extra checks and logs.\n\nRegularly profiling and monitoring your app can help you spot and fix performance issues before they become significant problems. You can use tools like [Lighthouse](https://developers.google.com/web/tools/lighthouse) or [Calibre](https://calibreapp.com) to monitor your app's performance over time.\n";

const __vite_glob_1_408 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: investigateSlowApp
}, Symbol.toStringTag, { value: 'Module' }));

const lazyLoading = "You can use React's `lazy()` function in conjunction with dynamic `import()` to lazily load a component. This is often combined with `Suspense` to display fallback content while the component is being loaded.\n\n```js\n// The component has to be exported as a default export\nexport default function RoadmapRender() {\n  return <h1>This is a lazily-loaded component!</h1>;\n}\n```\n\n```js\nimport { lazy, Suspense } from 'react';\n\nconst LazyRoadmapRender = lazy(() => delay(import('./RoadmapRender')));\n\nexport function App() {\n  const [showRoadmapRender, setShowRoadmapRender] = useState(false);\n  return (\n    <>\n      <button onClick={() => setShowRoadmapRender(true)}>\n        Show RoadmapRender\n      </button>\n      {showRoadmapRender && (\n        <Suspense fallback={<div>Loading...</div>}>\n          <LazyRoadmapRender />\n        </Suspense>\n      )}\n    </>\n  );\n}\n\n// Helper function to simulate a 2 seconds delay\nfunction delay(promise) {\n  return new Promise((resolve) => setTimeout(resolve, 2000)).then(\n    () => promise\n  );\n}\n```\n\nThe `RoadmapRender` component is lazily loaded and rendered inside the `Suspense` component. While the component is being loaded, the `Suspense` component will display the fallback content.\n";

const __vite_glob_1_409 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: lazyLoading
}, Symbol.toStringTag, { value: 'Module' }));

const pureComponents = "Pure components re-render only when the props passed to the component changes. For example, if you have a pure child component inside a parent component state changes in the parent component will not re-render the child component unless the props passed to the child component change.\n\nTo create a pure component, you can use the `memo` function from React. It is a higher order component which takes a component as an argument and returns a new component. The new component renders only if the props change.\n\n```javascript\nimport React, { memo } from 'react';\n\nconst ChildComponent = ({ name }) => {\n  console.log('Rendering child component');\n  return <div>{name}</div>;\n};\n\nconst PureChildComponent = memo(ChildComponent);\n\nconst ParentComponent = () => {\n  const [count, setCount] = useState(0);\n  const [name, setName] = useState('John');\n\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>Count - {count}</button>\n      <button onClick={() => setName('Jane')}>Change name</button>\n      <PureChildComponent name={name} />\n    </div>\n  );\n};\n```";

const __vite_glob_1_410 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: pureComponents
}, Symbol.toStringTag, { value: 'Module' }));

const reRenders = "Unnecessary re-renders in components can occur due to several reasons, and it's important to optimize your code to minimize them for better performance.\n\nHere are some common reasons for unnecessary re-renders in functional components:\n\n- **Using inline functions in JSX props**: If you pass an inline function as a prop to child components, those components will get re-rendered every time the parent component re-renders. This is because a new function is created on every render. You can optimize this by using `useCallback` hook to memoize the function.\n- **Using `useState` hook with objects**: If you use `useState` hook with objects, you need to make sure that you are not mutating the object. If you mutate the object, React will not be able to detect the change and will not re-render the component. You can optimize this by using `useReducer` hook instead of `useState` hook.\n- **Using `useEffect` hook without dependencies**: If you use `useEffect` hook without dependencies, it will run on every render. You can optimize this by passing an empty array as the second argument to `useEffect` hook.\n- **Parent Component Re-renders**: If a parent component re-renders, all its child components will also re-render. You can optimize this by using `React.memo` to memoize the child component where possible.\n- **Global State Changes**: If you use global state management libraries like Redux, MobX, etc., and the global state changes, all the components that use that state will re-render. You can optimize this by using `useSelector` hook to select only the state that you need in a component.\n- **Misusing Context**: If you use Context API to pass data to child components, and the data changes, all the child components will re-render. You can optimize this by using `useContext` hook to select only the data that you need in a component.\n\nYou can also use `React.StrictMode` to detect potential problems in your code that could cause unnecessary re-renders.\n\n";

const __vite_glob_1_411 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: reRenders
}, Symbol.toStringTag, { value: 'Module' }));

const refForwarding = "By default, each component’s DOM nodes are private. However, sometimes it’s useful to expose a DOM node to the parent—for example, to allow focusing it. To opt in, wrap your component definition into `forwardRef()`:\n\n```javascript\nimport { forwardRef } from 'react';\n\nconst MyInput = forwardRef(function MyInput(props, ref) {\n  const { label, ...otherProps } = props;\n  return (\n    <label>\n      {label}\n      <input {...otherProps} />\n    </label>\n  );\n});\n```\n\nYou will receive a `ref` as the second argument after props. Pass it to the DOM node that you want to expose:\n\n```javascript\nimport { forwardRef } from 'react';\n\nconst MyInput = forwardRef(function MyInput(props, ref) {\n  const { label, ...otherProps } = props;\n  return (\n    <label>\n      {label}\n      <input {...otherProps} ref={ref} />\n    </label>\n  );\n});\n```\n\nThis lets the parent Form component access their `<input>` DOM node exposed by `MyInput`:\n\n```javascript\nfunction Form() {\n  const ref = useRef(null);\n\n  function handleClick() {\n    ref.current.focus();\n  }\n\n  return (\n    <form>\n      <MyInput label=\"Enter your name:\" ref={ref} />\n      <button type=\"button\" onClick={handleClick}>\n        Edit\n      </button>\n    </form>\n  );\n}\n```\n\nThis Form component passes a ref to `MyInput`. The `MyInput` component forwards that ref to the `<input>` browser tag. As a result, the `Form` component can access that `<input>` DOM node and call `focus()` on it.\n\n";

const __vite_glob_1_412 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: refForwarding
}, Symbol.toStringTag, { value: 'Module' }));

const renderList = "In React, you can render a list by using the JavaScript `map` function to iterate over an array of items and return a JSX element for each item. It's important to provide a unique `key` prop to each element in the list for React's diffing algorithm to function efficiently during re-renders. Here's a basic example:\n\n```javascript\nconst items = ['Apple', 'Banana', 'Cherry'];\n\nfunction FruitList() {\n  return (\n    <ul>\n      {items.map((fruit, index) => (\n        <li key={index}>{fruit}</li>\n      ))}\n    </ul>\n  );\n}\n```\n\n> Note: While using the index as a key can work in some cases, it's generally not recommended for dynamic lists where items can be added, removed, or reordered.\n";

const __vite_glob_1_413 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: renderList
}, Symbol.toStringTag, { value: 'Module' }));

const strictMode = "Strict Mode is a tool in React for highlighting potential problems in an application. By wrapping a component tree with `StrictMode`, React will activate additional checks and warnings for its descendants. This doesn't affect the production build but provides insights during development.\n\n```js\nimport { StrictMode } from 'react';\nimport { createRoot } from 'react-dom/client';\n\nconst root = createRoot(document.getElementById('root'));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);\n```\n\nIn Strict Mode, React does a few extra things during development:\n\n1. It renders components twice to catch bugs caused by impure rendering.\n2. It runs side-effects (like data fetching) twice to find mistakes in them caused by missing effect cleanup.\n3. It checks if deprecated APIs are used, and logs a warning message to the console if so.\n";

const __vite_glob_1_414 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: strictMode
}, Symbol.toStringTag, { value: 'Module' }));

const suspense = "Suspense is a component in React that lets you specify the fallback content to display while waiting for a component to load. It is used in conjunction with `lazy()` to lazily load components.\n\n```js\nimport { lazy, Suspense } from 'react';\n\nconst LazyRoadmapRender = lazy(() => import('./RoadmapRender'));\n\nexport function App() {\n  const [show, setShow] = useState(false);\n  return (\n    <>\n      <button onClick={() => setShow(true)}>Show</button>\n      {show && (\n        <Suspense fallback={<div>Loading...</div>}>\n          <LazyRoadmapRender />\n        </Suspense>\n      )}\n    </>\n  );\n}\n```\n\nUntil the `RoadmapRender` component is loaded, the `Suspense` component will display the `Loading...` fallback content.\n";

const __vite_glob_1_415 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: suspense
}, Symbol.toStringTag, { value: 'Module' }));

const syntheticEvents = "React differs from HTML in that it uses a synthetic event system instead of directly binding to the browser’s native events. This system brings consistency and performance benefits, and it allows React to be agnostic of environments like browser, server, or React Native.\n\nThe events such as `onClick`, `onSubmit`, `onFocus`, etc. are all camel-cased to be consistent with the naming convention in JavaScript. React event handlers are written inside curly braces:\n\n```javascript\nfunction activateLasers(e) {\n    e.preventDefault();\n    console.log('The button was clicked.');\n}\n\n<button onClick={activateLasers}>Activate Lasers</button>\n```\n\nIn this case `activateLasers` is the event handler which will receive a React event object which, also known as a \"synthetic event\". It conforms to the same standard as the underlying DOM events, but fixes some browser inconsistencies.\n\nSome React events do not map directly to the browser’s native events. For example in `onMouseLeave`, `e.nativeEvent` will point to a `mouseout` event. If you need the underlying browser event for some reason, read it from `e.nativeEvent`.\n\nVisit the [React documentation](https://react.dev/reference/react-dom/components/common#react-event-object) for further details.";

const __vite_glob_1_416 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: syntheticEvents
}, Symbol.toStringTag, { value: 'Module' }));

const useTransition = "`useTransition` hook allows you to mark certain updates as **transitions** so they can be deprioritized, allowing other, more urgent updates to be processed first. This ensures that the UI remains responsive during updates that might take some time.\n\n```js\nimport { useTransition, useState } from 'react';\nimport { Posts } from './Posts';\nimport { Home } from './Home';\nimport { Contact } from './Contact';\n\nexport function App() {\n  const [isPending, startTransition] = useTransition();\n  const [page, setPage] = useState('home');\n\n  function changePage(newPage: string) {\n    startTransition(() => {\n      setPage(newPage);\n    });\n  }\n\n  return (\n    <>\n      <button onClick={() => changePage('home')}>Home</button>\n      <button onClick={() => changePage('posts')}>Posts</button>\n      <button onClick={() => changePage('contact')}>Contact</button>\n      <hr />\n      {isPending && <div>Loading...</div>}\n      {page === 'home' && <Home />}\n      {page === 'posts' && <Posts />}\n      {page === 'contact' && <Contact />}\n    </>\n  );\n}\n```\n\n```js\nexport function Home() {\n  return <div>Home</div>;\n}\n```\n\n```js\nexport function Contact() {\n  return <div>Contact</div>;\n}\n```\n\nPosts component is artificially delayed by 500ms to emulate extremely slow code.\n\n```js\nexport function Posts() {\n  const items = [];\n  for (let i = 0; i < 500; i++) {\n    items.push(<SlowPost key={i} />);\n  }\n  return <ul>{items}</ul>;\n}\n\nfunction SlowPost() {\n  const startTime = performance.now();\n  while (performance.now() - startTime < 1) {\n    // Do nothing for 1 ms per item to emulate extremely slow code\n  }\n\n  return <li>Post</li>;\n}\n```\n\nNow when you click on the `Posts` button, you'll notice that the UI remains responsive and you can still switch to other pages while the posts are loading. Try removing the `startTransition` wrapper around `setPage` in `changePage` to see the difference.\n";

const __vite_glob_1_417 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: useTransition
}, Symbol.toStringTag, { value: 'Module' }));

const virtualDom = "Virtual DOM works in this steps:\n\n1. Whenever any underlying data changes, new virtual DOM representation will be created.\n2. Then the difference between the previous DOM representation and the new one is calculated.\n3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.\n";

const __vite_glob_1_418 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: virtualDom
}, Symbol.toStringTag, { value: 'Module' }));

const avoidSelectStar = "You should avoid using **SELECT ***  as much as possible in your production code for the following reasons:\n\n- **Increased IO**: Using **SELECT ***, you can return unnecessary data that leads to increased Input/Output cycles at the database level since you will be reading all the data in a table. This effect will be more impactful on a table with a lot of data and even slow down your query.\n\n- **Increased network traffic**: **SELECT *** returns more data than required to the client, which uses more network bandwidth than needed. The increase in network bandwidth causes data to take longer to reach the client application and impacts the application's performance.\n\n- **More application memory**: The return of a lot of data would make your application require more memory to hold the unnecessary data which might you might not use and this impacts application performance.\n\n- **Makes maintenance more difficult**: Using **SELECT *** makes code maintenance more challenging. If the table structure changes by adding, removing, or renaming columns, the queries using **SELECT *** could break unexpectedly. You should explicitly specify the columns from which you want to fetch data to ensure resilience against potential changes in the database schema. ";

const __vite_glob_1_419 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: avoidSelectStar
}, Symbol.toStringTag, { value: 'Module' }));

const correlatedSubquery$1 = "A correlated subquery is a subquery that depends on a value from the outer query. This means that the query is evaluated for each row that might be selected in the outer query. Below is an example of a correlated subquery.\n\n```sql\nSELECT name, country_id, salary\nFROM employees em\nWHERE salary > (\n  SELECT AVG(salary) FROM employees\n  country_id = em.country_id);\n```\n\nThe code above:\n\n- Runs the outer query through each row of the table.\n- Takes the `country_id` from the `employees` table.\n- Iterates through the other rows and does the same calculation.\n\nThis leads to a degrading performance as the data in the table grows. \n\nYou should use a correlated subquery if you want to perform row-specific operations or cannot achieve an operation using JOIN or other aggregate functions. ";

const __vite_glob_1_420 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: correlatedSubquery$1
}, Symbol.toStringTag, { value: 'Module' }));

const countStarVsCountColumn = "The difference is that **COUNT(*)** counts all the rows of data, including NULL values, while **COUNT(column_name)** counts only non-NULL values in the specified column. Let's illustrate this using a table named `Users`.\n\n| userId | firstName | lastName | age | country  |\n| ------ | --------- | -------- | --- | -------- |\n| 1      | John      | Doe      | 30  | Portugal |\n| 2      | Jane      | Don      | 31  | Belgium  |\n| 3      | Zach      | Ridge    | 30  | Norway   |\n| 4      | null      | Tom      | 25  | Denmark  |\n\nIf you use **COUNT(*)**, the result will be 4 but if you use **COUNT(firstName)**, it will return 3, omitting the null value. ";

const __vite_glob_1_421 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: countStarVsCountColumn
}, Symbol.toStringTag, { value: 'Module' }));

const countUsersByCountry = "Given a table `Users` that looks like this:\n\n| userId | firstName | lastName | age | country   |\n| ------ | --------- | -------- | --- | --------- |\n| 1      | John      | Doe      | 30  | Portugal  |\n| 2      | Jane      | Don      | 31  | Belgium   |\n| 3      | Will      | Liam     | 25  | Argentina |\n| 4      | Wade      | Great    | 32  | Denmark   |\n| 5      | Peter     | Smith    | 27  | USA       |\n| 6      | Rich      | Mond     | 30  | USA       |\n| 7      | Rach      | Mane     | 30  | Argentina |\n| 8      | Zach      | Ridge    | 30  | Portugal  |\n\nThe query to **COUNT** the number of users by country is:\n\n```sql\nSELECT country, COUNT(country) FROM users\nGROUP BY country\n```\n\nThe query uses the **GROUP BY** clause to group the users by country and then shows the count in the next column. The result of the query looks like this:\n\n| country   | count |\n| --------- | ----- |\n| USA       | 2     |\n| Portugal  | 2     |\n| Argentina | 2     |\n| Belgium   | 1     |\n| Denmark   | 1     | ";

const __vite_glob_1_422 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: countUsersByCountry
}, Symbol.toStringTag, { value: 'Module' }));

const detectDateGaps = "You will use the **LAG()** function to detect gaps in a sequence of dates per user. You will compare each date with the previous one and check if the difference is greater than 1.  \n\nLet's use a table `ClockIns` to demonstrate how you detect gaps. The table has two columns, `userId` and `clockInDate`, representing the user identification number and the date the user clocked in with an access card into a facility. The table looks like this:\n\n| userId | clockInDate |\n| ------ | ----------- |\n| 1      | 2025-01-01  |\n| 1      | 2025-01-02  |\n| 1      | 2025-01-05  |\n| 1      | 2025-01-06  |\n| 2      | 2025-01-06  |\n| 2      | 2025-01-06  |\n| 2      | 2025-01-07  |\n| 3      | 2025-01-02  |\n| 3      | 2025-01-04  |\n| 3      | 2025-01-06  |\n| 3      | 2025-01-07  |\n\nTo query to find gaps per user looks like this:\n\n```sql\nWITH clockInGaps AS (\n  SELECT\n    userid,\n    clockInDate,\n    LAG(clockInDate) OVER (PARTITION BY userId ORDER BY clockInDate) AS previousClockInDate\n  FROM\n    clockIns\n)\n\nSELECT \n  userId,\n  previousClockInDate AS gapStart,\n  clockInDate AS gapEend,\n  clockInDate - previousClockInDate - 1 AS gapDays\nFROM clockInGaps\nWHERE clockInDate - previousClockInDate > 1\nORDER BY userId, gapStart;\n```\n\nThe code above starts with creating an expression `clockInGaps` that queries for each user and their `clockInDate` and uses the `LAG` function to get the previous date for each user. Then, the main query filters each row and finds the gaps between the current date and the previous date. The result of the query looks like this:\n\n| userId | gapStart   | gapEnd     | gapDays |\n| ------ | ---------- | ---------- | ------- |\n| 1      | 2025-01-02 | 2025-01-05 | 2       |\n| 2      | 2025-01-07 | 2025-01-10 | 2       |\n| 3      | 2025-01-02 | 2025-01-04 | 1       |\n| 3      | 2025-01-04 | 2025-01-06 | 1       | ";

const __vite_glob_1_423 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: detectDateGaps
}, Symbol.toStringTag, { value: 'Module' }));

const employeesAboveAverageSalary = "Given an `Employees` table with columns `id`, `name`, and `salary` that looks like this:\n\n| id | name     | salary |\n| -- | -------- | ------ |\n| 1  | Irene    | 1000   |\n| 2  | Peter    | 1230   |\n| 3  | Raymond  | 1450   |\n| 4  | Henry    | 1790   |\n| 5  | Naomi    | 2350   |\n| 6  | Bridget  | 2000   |\n| 7  | Emily    | 2500   |\n| 8  | Great    | 3000   |\n| 9  | Mercedes | 2750   |\n| 10 | Zoe      | 2900   |\n\nThe query to find employees earning more than the average salary is:\n\n```sql\nSELECT * FROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees);\n```\n\n| id | name     | salary |\n| -- | -------- | ------ |\n| 5  | Naomi    | 2350   |\n| 7  | Emily    | 2500   |\n| 8  | Great    | 3000   |\n| 9  | Mercedes | 2750   |\n| 10 | Zoe      | 2900   | ";

const __vite_glob_1_424 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: employeesAboveAverageSalary
}, Symbol.toStringTag, { value: 'Module' }));

const existsVsIn = "**EXISTS** and **IN** are used in subqueries to filter results, but they perform different functions depending on their usage. \n\nYou should use **EXISTS** in the following situations:\n\n- When you want to check if a row exists and not the actual values.\n- When the subquery is a correlated query.\n- When the subquery returns many rows but you want to get the first match.\n\nYou should use **IN** in the following scenarios:\n\n- When you are comparing a column to a list of values.\n- When the subquery returns a small or static list. ";

const __vite_glob_1_425 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: existsVsIn
}, Symbol.toStringTag, { value: 'Module' }));

const findDuplicates$1 = "To find duplicate records, you must first define the criteria for detecting duplicates. Is it a combination of two or more columns where you want to detect the duplicates, or are you searching for duplicates within a single column?\n\nThe following steps will help you find duplicate data in a table.\n\n- Use the **GROUP BY** clause to group all the rows by the column(s) on which you want to check the duplicate values.\n- Use the **COUNT** function in the **HAVING** command to check if any groups have more than one entry.\n\nLet's see how to handle single-column duplicates. In a table `Users`, there are three users who are 30 years of age. Let's use the **GROUP BY** clause and **COUNT** function to find the duplicate values.\n\n```sql\nSELECT Age, COUNT(Age)\nFROM Users\nGROUP BY Age\nHAVING COUNT(Age) > 1\n```\n\nThe result of the query looks like this:\n\n| age | count |\n| --- | ----- |\n| 30  | 3     |\n\nHandling multi-column (composite) duplicates is similar to handling single-column duplicates.\n\n```sql\nSELECT FirstName, LastName, COUNT(*) AS dup_count\nFROM Users\nGROUP BY FirstName, LastName\nHAVING COUNT(*) > 1;\n```\n\nAfter finding duplicates, you might be asked how to delete the duplicates. The query to delete duplicates is shown below using Common Table Expression (CTE) and ROW_NUMBER().\n\n```sql\nWITH ranked AS (\n  SELECT *,\n         ROW_NUMBER() OVER (PARTITION BY Age ORDER BY id) AS rn\n  FROM Users\n)\nDELETE FROM Users\nWHERE id IN (\n  SELECT id\n  FROM ranked\n  WHERE rn > 1\n);\n```\n\nThe query deletes all the duplicates while retaining the first row of data. ";

const __vite_glob_1_426 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: findDuplicates$1
}, Symbol.toStringTag, { value: 'Module' }));

const foreignKey$1 = "A foreign key is like a bridge between two tables. A foreign key in one table is the primary key in another. It is the connector between the two tables. ";

const __vite_glob_1_427 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: foreignKey$1
}, Symbol.toStringTag, { value: 'Module' }));

const groupByMistakes = "The common mistakes people encounter when using the **GROUP BY** clause include:\n\n- **Selecting non-aggregated columns not in the GROUP BY clause:** This is a common mistake made my beginners and experts. An example query of this looks like this:\n\n```sql\nSELECT day, amount FROM Sales\nGROUP BY day\n```\n\nIn the query above, the `amount` column is not part of the `GROUP BY` clause and will throw an error that it must appear in the `GROUP BY` clause. To fix this, you should add an aggregate function to the amount column.\n\n```sql\nSELECT day, MAX(amount) FROM Sales\nGROUP BY day\n```\n\n- **Not using aggregate functions:** It is also a common mistake to use `GROUP BY` without aggregate functions. `GROUP BY` usually goes with aggregate functions like `MAX`, `MIN`, `COUNT`, etc.\n- **Grouping by multiple columns**: Grouping by multiple columns can make the query meaningless. It is not common to group by many columns, and when this happens, you should check if you really need to group by those columns. ";

const __vite_glob_1_428 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: groupByMistakes
}, Symbol.toStringTag, { value: 'Module' }));

const groupByWithoutAggregate = "If you use the **GROUP BY** clause without an aggregate function, it is equivalent to using the **DISTINCT** command. For example, the command below:\n\n```sql\nSELECT phoneNumber FROM phoneNumbers\nGROUP BY phoneNumber\n```\n\nis equivalent to:\n\n```sql\nSELECT DISTINCT phoneNumber FROM phoneNumbers\n``` ";

const __vite_glob_1_429 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: groupByWithoutAggregate
}, Symbol.toStringTag, { value: 'Module' }));

const groupByWork = "**GROUP BY** is a standard SQL command that groups rows with the same value in the specified column. You should use with aggregate functions such as **COUNT**, **MIN**, **MAX,** etc.\n\n![GROUP BY](https://assets.roadmap.sh/guest/group-by-wc8aw.png)\n\nThe query below illustrates the **GROUP BY** clause:\n\n```sql\nSELECT columnName FROM Table\nGROUP BY columnName\n``` ";

const __vite_glob_1_430 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: groupByWork
}, Symbol.toStringTag, { value: 'Module' }));

const indexesUsefulness = "Indexes in databases are like the indexes in books. They increase the speed of data retrieval from a database. When you want to read data from a table, instead of going through all the rows of the table, indexes help to go straight to the row you are looking for. \n\n![Types of Indexes](https://assets.roadmap.sh/guest/types-of-indexes-ntfsk.png)\n\nThey improve **SELECT** queries, improve performance, and make sorting and filtering faster. They also ensure data integrity. There are different types of indexes, which include:\n\n- B-Tree index\n- Composite index\n- Unique index\n- Full text index\n- Bitmap index\n- Clustered index\n- Non-clustered index ";

const __vite_glob_1_431 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: indexesUsefulness
}, Symbol.toStringTag, { value: 'Module' }));

const innerJoinVsLeftJoin = "A **JOIN** combines data from two or more tables based on a related column between them. It is useful when you need to retrieve data spread across multiple tables in relational database management systems.\n\nAn **INNER JOIN** returns only rows with a match in both tables based on the specified join condition. If there are no matching rows, there will be no results. The SQL syntax for an **INNER JOIN** is shown in the code snippet below.\n\n![Inner join vs. Left join](https://assets.roadmap.sh/guest/inner-join-vs-left-join-tifdp.png)\n\n```sql\nSELECT table1.column_name1, table1.column_name2, table2.column_name1, table2.column_name2 FROM table1\nINNER JOIN table2\nON table1.column_name = table2.column_name\n```\n\nFor example, there are two tables `Users` and `Cities` with the following data:\n\n**Users table**\n\n| userId | firstName | lastName | age | cityId |\n| ------ | --------- | -------- | --- | ------ |\n| 1      | John      | Doe      | 30  | 1      |\n| 2      | Jane      | Don      | 31  | 1      |\n| 3      | Will      | Liam     | 25  | 1      |\n| 4      | Wade      | Great    | 32  | 1      |\n| 5      | Peter     | Smith    | 27  | 2      |\n| 6      | Rich      | Mond     | 30  | 2      |\n| 7      | Rach      | Mane     | 30  | 2      |\n| 8      | Zach      | Ridge    | 30  | 3      |\n\n**Cities table**\n\n| id | name       |\n| -- | ---------- |\n| 1  | London     |\n| 2  | Manchester |\n\nLet's say you want to retrieve a list of users and their respective city names. You can achieve this using the **INNER JOIN** query.\n\n```sql\nSELECT users.firstName, users.lastName, users.age, cities.name as cityName FROM users\nINNER JOIN cities\nON users.cityId = cities.id\n```\n\n| firstName | lastName | age | cityName   |\n| --------- | -------- | --- | ---------- |\n| John      | Doe      | 30  | London     |\n| Jane      | Don      | 31  | London     |\n| Will      | Liam     | 25  | London     |\n| Wade      | Great    | 32  | London     |\n| Peter     | Smith    | 27  | Manchester |\n| Rich      | Mond     | 30  | Manchester |\n| Rach      | Mane     | 30  | Manchester |\n\n**LEFT JOIN** returns all the rows from the left table (table 1) and the matched rows from the right table (table 2). If no matching rows exist in the right table (table 2), then NULL values are returned. The SQL syntax for a Left join is shown in the code snippet below.\n\n```sql\nSELECT table1.column_name1, table1.column_name2, table2.column_name1, table2.column_name2 FROM table1\nLEFT JOIN table2\nON table1.column_name = table2.column_name \n```\n\nLet's have a look at a practical example with `Users` and `Cities` tables from before.\n\nWhen you execute the **LEFT JOIN** query, you get the table below.\n\n| firstName | lastName | age | cityName   |\n| --------- | -------- | --- | ---------- |\n| John      | Doe      | 30  | London     |\n| Jane      | Don      | 31  | London     |\n| Will      | Liam     | 25  | London     |\n| Wade      | Great    | 32  | London     |\n| Peter     | Smith    | 27  | Manchester |\n| Rich      | Mond     | 30  | Manchester |\n| Rach      | Mane     | 30  | Manchester |\n| Zach      | Ridge    | 30  | null       | ";

const __vite_glob_1_432 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: innerJoinVsLeftJoin
}, Symbol.toStringTag, { value: 'Module' }));

const lagLeadFunctions = "**LAG()** and **LEAD()** are window functions used to retrieve data from rows before and after a specified row. You can also refer to them as positional SQL functions.\n\n**LAG()** allows you to access a value stored in rows before the current row. The row may be directly before or some rows before. Let's take a look at the syntax:\n\n```sql\nLAG(column_name, offset, default_value)\n```\n\nIt takes three arguments.\n\n- **column_name**: This specifies the column to fetch from the previous row.\n- **offset**: This is an optional argument and specifies the number of rows behind to look at. The default is 1.\n- **default_value**: This is the value to assign when no previous row exists. It is optional, and the default is NULL.\n\nUsing the `Sales` table, let's illustrate the **LAG()** function. The query is used to find the previous day sales. LAG() is useful when you want to create reports of past events.\n\n| id | day       | amount |\n| -- | --------- | ------ |\n| 1  | Monday    | 200    |\n| 2  | Tuesday   | 300    |\n| 3  | Wednesday | 600    |\n| 4  | Thursday  | 390    |\n| 5  | Friday    | 900    |\n| 6  | Saturday  | 600    |\n\n```sql\nSELECT\n  id,\n  day,\n  amount,\n  LAG(amount) OVER (ORDER BY id) AS previous_day_sales\nFROM\n  sales;\n```\n\nThe result of the query looks like this:\n\n| id | day       | amount | previous_day_sales |\n| -- | --------- | ------ | ------------------ |\n| 1  | Monday    | 200    | null               |\n| 2  | Tuesday   | 300    | 200                |\n| 3  | Wednesday | 600    | 300                |\n| 4  | Thursday  | 390    | 600                |\n| 5  | Friday    | 900    | 390                |\n| 6  | Saturday  | 600    | 900                |\n\nYou use the **LEAD()** function to get data from rows after the current row. Its syntax is similar to that of the **LAG()** function. You can use it for forecasting future trends by looking ahead.\n\nThe query using the **LEAD()** function is shown below.\n\n```sql\nSELECT\n  id,\n  day,\n  amount,\n  LEAD(amount) OVER (ORDER BY id) AS previous_day_sales\nFROM\n  sales;\n```\n\n| id | day       | amount | previous_day_sales |\n| -- | --------- | ------ | ------------------ |\n| 1  | Monday    | 200    | 300                |\n| 2  | Tuesday   | 300    | 600                |\n| 3  | Wednesday | 600    | 390                |\n| 4  | Thursday  | 390    | 900                |\n| 5  | Friday    | 900    | 600                |\n| 6  | Saturday  | 600    | null               | ";

const __vite_glob_1_433 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: lagLeadFunctions
}, Symbol.toStringTag, { value: 'Module' }));

const missingIndexesImpact = "Missing indexes can affect the performance of queries, especially when the data grows. The major impacts of missing indexes are listed below:\n\n- **Slow queries**: Without indexes, every read query will go through the whole table to find matching rows. This will get worse as the data in the table grows.\n- **Locking and concurrency issues**: Scanning a table without indexes takes longer, and locking the table can prevent other queries from running, affecting application performance.\n- **Inefficient joins**: Joins on tables without indexes on the join keys are extremely slow and result in bad query performance.\n- **Poor user experience**: Missing indexes can lead to poor user experience in your applications. It can result to slower page loads, application hanging when data is being fetched from the database. ";

const __vite_glob_1_434 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: missingIndexesImpact
}, Symbol.toStringTag, { value: 'Module' }));

const nestedSubqueries = "Yes, you can nest subqueries multiple levels deep when you want to perform complex logic. A nested subquery is a subquery inside another subquery, forming layers of subqueries. Many SQL engines allow multiple layers of subqueries, but this causes poor readability and degrades performance. ";

const __vite_glob_1_435 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: nestedSubqueries
}, Symbol.toStringTag, { value: 'Module' }));

const notInNullIssues = "Since NULL is unknown, a `NOT IN` query containing a NULL or NULL in the list of possible values will always return 0 records because of the unknown result introduced by the NULL value. SQL cannot determine for sure whether the value is not in that list.\n\nLet's illustrate this using a table `Sales` that looks like this:\n\n| id | day       | amount |\n| -- | --------- | ------ |\n| 1  | Monday    | 200    |\n| 2  | Tuesday   | 300    |\n| 3  | Wednesday | 600    |\n| 4  | Thursday  | 390    |\n| 5  | Friday    | 900    |\n| 6  | Saturday  | 600    |\n\nIf you run the query below, it will return an empty result because SQL cannot determine if the value is not in the list because nothing equals or doesn't equal NULL.\n\n```sql\nSELECT * from sales\nWHERE amount NOT IN (200, 300, 600, NULL);\n``` ";

const __vite_glob_1_436 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: notInNullIssues
}, Symbol.toStringTag, { value: 'Module' }));

const ntileFunction = "**NTILE()** is a window function that divides rows into a pre-defined number of roughly equal groups. It's like breaking your data into different sets based on your defined criteria. For example, let's say you have some student scores from 1 to 100; you can use the **NTILE()** function to categorize the scores into different groups or buckets. \n\nThe syntax of the `NTILE()` function is:\n\n```sql\nNTILE(n) OVER (ORDER BY some_column)\n```\n\n- n: represents the number of groups you want to divide your rows into.\n- ORDER BY: defines the order of the rows in each group where the function is applied.\n\n \nLet's see a practical example using a table `Scores`. The table stores students' scores on a test. We will see how to use the **NTILE()** function.\n\n| userId | score |\n| ------ | ----- |\n| 1      | 78    |\n| 2      | 70    |\n| 3      | 90    |\n| 4      | 98    |\n| 5      | 60    |\n| 6      | 88    |\n| 7      | 100   |\n| 8      | 66    |\n\nThe query using the **NTILE()** function looks like this:\n\n```sql\nSELECT\n  id,\n  score,\n  NTILE(3) OVER (ORDER BY score DESC) AS category\nFROM scores;\n```\n\n| userId | score | category |\n| ------ | ----- | -------- |\n| 7      | 100   | 1        |\n| 4      | 98    | 1        |\n| 3      | 90    | 1        |\n| 6      | 88    | 2        |\n| 1      | 78    | 2        |\n| 2      | 70    | 2        |\n| 8      | 66    | 3        |\n| 5      | 60    | 3        |\n\nThe **NTILE()** function is useful in data analysis because it can detect outliers in a data set and create histograms of data. It can also create percentiles and quartiles for data distribution. ";

const __vite_glob_1_437 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: ntileFunction
}, Symbol.toStringTag, { value: 'Module' }));

const optimizeSlowQueries = "To optimize slow-running queries, you need to analyze the query first to know what to optimize. You can perform different optimizations depending on the query. Some of the optimizations include:\n\n- **Using indexes effectively**: Indexes speed up queries by enabling the database to find entries that fit specific criteria quickly. Indexing is the process of mapping the values of one or more columns to a unique value that makes it easy to search for rows that match a search criteria. You can create indexes on columns used frequently in the **WHERE**, **JOIN**, and **ORDER BY** clauses. However, note that creating too many indexes can slow down inserts, updates, and deletions.\n\n- **Avoid SELECT *** : Using the **SELECT** ***** statement can slow down your query performance because it returns all the columns in a table including the ones not needed for the query. You should select only the columns that you need for a query for optimal performance. So when you see a query that selects all columns, you should check if all the columns are really needed and used further down the query chain.\n\n- **Avoid using subqueries**: Subqueries slow down query performance, especially when you use them in the `WHERE` or `HAVING` clauses. You should avoid using subqueries where possible and use JOINs or other techniques instead.\n\n- **Utilize stored procedures**: Stored procedures are precompiled SQL statements stored in a database, and can be called from an application or directly from a query. Using stored procedures can improve your query performance by reducing the amount of data that is sent between the database and your application, and also saves time required to compile the SQL statements. ";

const __vite_glob_1_438 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: optimizeSlowQueries
}, Symbol.toStringTag, { value: 'Module' }));

const primaryKey$1 = "A primary key is the unique identifier of a row of data in a table. You use it to identify each row uniquely, and no two rows can have the same primary key. A primary key column cannot be null. In the example below, `user_id` is the primary key.\n\n```sql\nCREATE TABLE users (\n   user_id INT PRIMARY KEY,\n   name VARCHAR(100),\n   phoneNumber VARCHAR(100)\n);\n``` ";

const __vite_glob_1_439 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: primaryKey$1
}, Symbol.toStringTag, { value: 'Module' }));

const rankDenseRankRowNumber = "The **RANK()** function assigns each row a rank according to an ascending or descending order. If there are matching values, it assigns them the same position and then skips the next number for the next rank. For example, if two rows have equivalent values and are both assigned rank 1, the next rank would be 3 instead of 2.\n\n![Window functions](https://assets.roadmap.sh/guest/window-functions-42dn5.png)\n\nLet's use the `Sales` table from the previous question to illustrate the **RANK()** function. The query to rank in order of the amount looks like this:\n\n```sql\nSELECT\n  id,\n  day,\n  amount,\n  RANK() OVER (ORDER BY amount DESC) AS amount_rank\nFROM\n  sales;\n```\n\nThe result is shown in the image below. You will observe that the amount 900 takes the first rank and 200 the lowest rank. Also, there is a gap between rank 2 and 4 because two values have the same rank. You can also infer that the most sales were on Friday and the least on Monday. \n\n| id | day       | amount | amount_rank |\n| -- | --------- | ------ | ----------- |\n| 5  | Friday    | 900    | 1           |\n| 3  | Wednesday | 600    | 2           |\n| 6  | Saturday  | 600    | 2           |\n| 4  | Thursday  | 390    | 4           |\n| 2  | Tuesday   | 300    | 5           |\n| 1  | Monday    | 200    | 6           |\n\n**DENSE_RANK()** function is similar to **RANK()** in that it assigns ranks to rows, but the difference is that **DENSE_RANK** does not leave a gap when there are two or more equivalent values. Let's illustrate it with the `Sales` table from above. The query is shown below.\n\n```sql\nSELECT\n  id,\n  day,\n  amount,\n  DENSE_RANK() OVER (ORDER BY amount DESC) AS amount_rank\nFROM\n  sales;\n```\n\nThe result is shown below. As you will notice, there is no gap between the ranks like in the **RANK** function.\n\n| id | day       | amount | amount_rank |\n| -- | --------- | ------ | ----------- |\n| 5  | Friday    | 900    | 1           |\n| 3  | Wednesday | 600    | 2           |\n| 6  | Saturday  | 600    | 2           |\n| 4  | Thursday  | 390    | 3           |\n| 2  | Tuesday   | 300    | 4           |\n| 1  | Monday    | 200    | 5           |\n\n**ROW_NUMBER** assigns a unique number to each row depending on the order you specify. It does not skip numbers; even though there are equivalent values, it assigns them different numbers, unlike **RANK** and **DENSE_RANK** functions that give them the same rank.\n\nLet's use the same `Sales` table to illustrate. The query below shows how to use the **ROW_NUMBER** function.\n\n```sql\nSELECT\n  id,\n  day,\n  amount,\n  ROW_NUMBER() OVER (ORDER BY amount DESC) AS rowNumber\nFROM\n  sales;\n```\n\nThe result is shown in the image below. You will notice that the `rownumber` column increases, and even though there are matching values, it just assigns a unique row number to each.\n\n| id | day       | amount | amount_rank |\n| -- | --------- | ------ | ----------- |\n| 5  | Friday    | 900    | 1           |\n| 3  | Wednesday | 600    | 2           |\n| 6  | Saturday  | 600    | 3           |\n| 4  | Thursday  | 390    | 4           |\n| 2  | Tuesday   | 300    | 5           |\n| 1  | Monday    | 200    | 6           | ";

const __vite_glob_1_440 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: rankDenseRankRowNumber
}, Symbol.toStringTag, { value: 'Module' }));

const runningTotal = "Let's use a table `Sales` as a reference for this query. It has three columns: `id`, `day` which represents the day of the week, and `amount` which is the amount sold in US Dollars. The table looks like this:\n\n| id | day       | amount |\n| -- | --------- | ------ |\n| 1  | Monday    | 200    |\n| 2  | Tuesday   | 300    |\n| 3  | Wednesday | 600    |\n| 4  | Thursday  | 390    |\n| 5  | Friday    | 900    |\n\nThe query to calculate the running total is:\n\n```sql\nSELECT\n  id,\n  sale_date,\n  amount,\n  SUM(amount) OVER (ORDER BY sale_date) AS running_total\nFROM\n  sales;\n```\n\nThe query uses a Window function **OVER** to sum the amount for each row of data and saving the running total. It gets the total for each day and adds it to the previous totals. The result of the query looks like this:\n\n| id | day       | amount | running_total |\n| -- | --------- | ------ | ------------- |\n| 1  | Monday    | 200    | 200           |\n| 2  | Tuesday   | 300    | 500           |\n| 4  | Thursday  | 390    | 1100          |\n| 3  | Wednesday | 600    | 1490          |\n| 5  | Friday    | 900    | 2390          |\n\nYou can observe from the image that the last column is `running_total,` which takes the amount for the current day and adds it to its previous value to get its current value. ";

const __vite_glob_1_441 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: runningTotal
}, Symbol.toStringTag, { value: 'Module' }));

const sargableQuery = "SARGable stands for Search Argumentable query, which uses indexes and leads to efficient queries. If a query is SARGable, the database engine quickly locates rows using indexes, avoids scanning the whole table, and improves query performance. ";

const __vite_glob_1_442 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sargableQuery
}, Symbol.toStringTag, { value: 'Module' }));

const secondHighestSalary = "Given a table `Salaries`,\n\n| id | salary |\n| -- | ------ |\n| 1  | 1000   |\n| 2  | 2000   |\n| 3  | 3000   |\n| 4  | 4000   |\n\nThe query to find the second-highest salary is shown in the code snippet below\n\n```sql\nSELECT DISTINCT Salary\nFROM Salaries\nORDER BY Salary DESC\nLIMIT 1 OFFSET 1\n```\n\nThe result of the query is shown below\n\n|   | salary |\n| - | ------ |\n| 1 | 3000   | ";

const __vite_glob_1_443 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: secondHighestSalary
}, Symbol.toStringTag, { value: 'Module' }));

const selectNonGroupedColumn = "If you **SELECT** a column not in the **GROUP BY** clause, it will throw an error stating that the column must be in the **GROUP BY** clause or in an aggregate function. Let's use the table below as an illustration.\n\n| firstName | lastName  | phoneNumber |\n| --------- | --------- | ----------- |\n| John      | Doe       | +23410910   |\n| Jack      | Ray       | +23410911   |\n| Irene     | Rotherdam | +23410911   |\n\nIf you run the query below against the database:\n\n```sql\nSELECT firstName, phoneNumber FROM phoneNumbers\nGROUP BY phoneNumber\n```\n\nThe result will be an error because `firstName` is not in the **GROUP BY** clause and not using an aggregate function. ";

const __vite_glob_1_444 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: selectNonGroupedColumn
}, Symbol.toStringTag, { value: 'Module' }));

const sqlQueriesEnding = "## Wrapping up\n\nMastering SQL queries is essential for anyone working with databases, whether you're a beginner just starting out or an experienced developer looking to sharpen your skills. The 30 questions covered in this guide span from foundational concepts like JOINs and WHERE clauses to advanced topics such as window functions and query optimization.\n\nRemember that SQL proficiency comes with practice. Take time to implement these queries in your own database environment, experiment with different scenarios, and understand how each function behaves with various data sets. The more you practice, the more confident you'll become in handling complex database challenges during interviews and in real-world applications.\n\nKeep this guide handy as a reference, and don't hesitate to revisit the concepts that challenge you most. Good luck with your SQL journey and upcoming interviews!";

const __vite_glob_1_445 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sqlQueriesEnding
}, Symbol.toStringTag, { value: 'Module' }));

const subqueryVsJoin = "A subquery is a query that is inside another query. You use it for queries that require complex logic. You should use subqueries when you want to use the result of that subquery for another query. In the example below, the subquery is in brackets.\n\n![Subquery](https://assets.roadmap.sh/guest/sql-subquery-ro4d0.png)\n\n```sql\nSELECT firstName,\n  (SELECT COUNT(*)\n  FROM cities\n  WHERE cities.id = users.city_id) AS cityCount\nFROM users;\n```\n\nOn the other hand, a **JOIN** combines two or more tables based on related columns between them. The related column is usually a foreign key. You should use **JOINS** when you want to pull related data from different tables together. The code below illustrates how to use a **JOIN**.\n\n```sql\nSELECT firstName, COUNT(*) FROM users\nJOIN cities ON users.city_id = cities.id\n```\n\nA JOIN is faster than a subquery in the following scenarios:\n\n- When you are querying data from multiple tables.\n- When you are filtering or joining on index columns. ";

const __vite_glob_1_446 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: subqueryVsJoin
}, Symbol.toStringTag, { value: 'Module' }));

const unionVsUnionAll$1 = "UNION is used for removing duplicates while UNION ALL keeps all duplicates. UNION is slower compared to UNION ALL because of de-duplication. You use UNION when you want to obtain unique records and UNION ALL when you want every row even if they are repeated. ";

const __vite_glob_1_447 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: unionVsUnionAll$1
}, Symbol.toStringTag, { value: 'Module' }));

const whereVsHaving = "You use **WHERE** for filtering rows before applying any grouping or aggregation. \nThe code snippet below illustrates the use of **WHERE**. It filters the `Users` table for rows where the `Age` is greater than 18. \n\n```sql\nSELECT * FROM Users\nWHERE Age > 18;\n```\n\nThe result of the query is similar to the table below.\n\n| userId | firstName | lastName | age |\n| ------ | --------- | -------- | --- |\n| 1      | John      | Doe      | 30  |\n| 2      | Jane      | Don      | 31  |\n| 3      | Will      | Liam     | 25  |\n| 4      | Wade      | Great    | 32  |\n| 5      | Peter     | Smith    | 27  |\n\nOn the other hand, you use **HAVING** to filter groups after performing grouping and aggregation. You apply it to the result of aggregate functions, and it is mostly used with the **GROUP BY** clause.\n\n```sql\nSELECT FirstName, Age FROM Users\nGROUP BY FirstName, Age\nHAVING Age > 30;\n```\n\nThe code above selects the `FirstName` and `Age` columns, then groups by the `FirstName` and `Age`, and finally gets entries with age greater than 30. The result of the query looks like this:\n\n| firstName | age |\n| --------- | --- |\n| Wade      | 32  |\n| Jane      | 31  |";

const __vite_glob_1_448 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: whereVsHaving
}, Symbol.toStringTag, { value: 'Module' }));

const windowFunction = "A window function is a function that allows you to perform operations on a specific set of rows related to the current row. Unlike aggregate functions that perform calculations on an entire data set, window functions can perform operations on a subset of data. These calculations are valid for aggregates, ranking, and cumulative totals without altering the original dataset. ";

const __vite_glob_1_449 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: windowFunction
}, Symbol.toStringTag, { value: 'Module' }));

const appointmentsNoTreatment = "```sql\nSELECT \n  a.appointment_id, \n  a.patient_id, \n  a.appointment_date\nFROM appointments a\nLEFT JOIN treatments t ON a.appointment_id = t.appointment_id\nWHERE t.treatment_id IS NULL AND a.status = 'completed';\n```\n\nSay you're using a `LEFT JOIN` to find appointments without a matching treatment. Filtering for `treatment_id IS NULL` isolates those cases. Checking the appointment status keeps the focus on visits that actually happened. ";

const __vite_glob_1_450 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: appointmentsNoTreatment
}, Symbol.toStringTag, { value: 'Module' }));

const averageTreatmentCost = "```sql\nSELECT \n  appointment_id, \n  AVG(cost) AS avg_treatment_cost\nFROM treatments\nGROUP BY appointment_id;\n```\n\nMention that treatments are tied to appointments, so grouping by `appointment_id` lets you calculate the average cost for each visit. This kind of breakdown could help with billing or identifying unusually expensive sessions. ";

const __vite_glob_1_451 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: averageTreatmentCost
}, Symbol.toStringTag, { value: 'Module' }));

const clusteredVsNonclusteredIndexes = "This is a concept that often confuses people, but comes up a lot in interviews. Indexes help your database find data faster (similar to an index in a book).\n\n- **Clustered index**: Determines the physical order of rows in a table, and only one clustered index can exist per table. It's like having the book's pages arranged by one specific topic.\n- **Non-clustered index**: Doesn't affect how rows are stored. It's a separate lookup table that points to the actual data. You can have several non-clustered indexes.\n\n```sql\n-- Creating a clustered index (usually on the primary key)\nCREATE CLUSTERED INDEX idx_employees_id ON employees(employee_id);\n\n-- Creating a non-clustered index\nCREATE NONCLUSTERED INDEX idx_employees_dept ON employees(department_id);\n```\n\nChoosing the right index type depends on how you're querying the data; range queries often benefit from clustered indexes, while exact lookups do well with non-clustered ones. ";

const __vite_glob_1_452 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: clusteredVsNonclusteredIndexes
}, Symbol.toStringTag, { value: 'Module' }));

const correlatedSubquery = "A correlated subquery uses values from the outer query and runs once for each row in the outer query. It can't run on its own because it depends on values outside its scope.\n\nUse it when comparing each row to a related value, such as finding employees who earn more than the average salary in their department. ";

const __vite_glob_1_453 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: correlatedSubquery
}, Symbol.toStringTag, { value: 'Module' }));

const databaseNormalization = "Normalization is a way to organize your database so you don't repeat data unnecessarily. It helps keep your data clean, avoids update issues, and makes the structure easier to manage as your app grows.\n\nThe main goals:\n\n- Avoid repeating the same data in different places.\n- Make updates and insert more reliably.\n- Keep queries simple and logical.\n- Make it easier to adjust your schema later.\n\nBefore normalization:\n\n```sql\nCREATE TABLE orders_unnormalized (\n    order_id INT,\n    product_name VARCHAR(100),\n    product_category VARCHAR(50),\n    product_price DECIMAL(10,2),\n    customer_name VARCHAR(100),\n    customer_email VARCHAR(100),\n    customer_address VARCHAR(200)\n);\n```\n\nAfter normalization:\n\n```sql\nCREATE TABLE customers (\n    customer_id INT PRIMARY KEY,\n    name VARCHAR(100),\n    email VARCHAR(100),\n    address VARCHAR(200)\n);\n\nCREATE TABLE products (\n    product_id INT PRIMARY KEY,\n    name VARCHAR(100),\n    category VARCHAR(50),\n    price DECIMAL(10,2)\n);\n\nCREATE TABLE orders (\n    order_id INT PRIMARY KEY,\n    customer_id INT REFERENCES customers(customer_id),\n    product_id INT REFERENCES products(product_id),\n    order_date DATE\n);\n```\n\nWhile normalization offers many benefits, if you normalize too much, you might end up with too many small tables and lots of joins, which can slow down performance in read-heavy systems. ";

const __vite_glob_1_454 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: databaseNormalization
}, Symbol.toStringTag, { value: 'Module' }));

const databaseTransactions = "A transaction is a group of actions that should be treated as one. Either everything in the transaction succeeds, or nothing does. This helps keep your data accurate, especially when making multiple changes at once.\n\n```sql\n-- Basic transaction syntax\nBEGIN TRANSACTION;\n\nUPDATE accounts SET balance = balance - 100 WHERE account_id = 123;\nUPDATE accounts SET balance = balance + 100 WHERE account_id = 456;\n\n-- If both updates succeed\nCOMMIT;\n\n-- If there's a problem\nROLLBACK;\n```\n\nTransactions follow ACID properties:\n\n![ACID Properties](https://assets.roadmap.sh/guest/acid-properties-fau5z.png)\n\n- **Atomicity**: All steps succeed or none at all.\n- **Consistency**: The database stays valid before and after.\n- **Isolation**: Transactions don't interfere with each other.\n- **Durability**: Once committed, the changes are saved permanently.\n\nIf you're dealing with things like financial transfers or inventory updates, using transactions is a must. ";

const __vite_glob_1_455 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: databaseTransactions
}, Symbol.toStringTag, { value: 'Module' }));

const doctorMostPatients = "```sql\nSELECT \n  d.full_name, \n  COUNT(DISTINCT a.patient_id) AS unique_patients\nFROM doctors d\nJOIN appointments a ON d.doctor_id = a.doctor_id\nGROUP BY d.full_name\nORDER BY unique_patients DESC\nLIMIT 1;\n```\n\nExplain that `COUNT(DISTINCT patient_id)` helps you avoid counting the same patient twice. Ordering by the count and limiting the result to 1 gives you the doctor who's seen the widest variety of patients. ";

const __vite_glob_1_456 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: doctorMostPatients
}, Symbol.toStringTag, { value: 'Module' }));

const findDuplicates = "You can find duplicates by grouping by the columns that should be unique, counting how many times each group appears, and filtering out any that appear more than once.\n\nFor example, you can find duplicate emails in a user table by grouping all rows by the email column.\n\n```sql\nSELECT email, COUNT(*)\nFROM users\nGROUP BY email\nHAVING COUNT(*) > 1;\n```\n\nThis is useful during data cleaning or when validating records before import. ";

const __vite_glob_1_457 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: findDuplicates
}, Symbol.toStringTag, { value: 'Module' }));

const foreignKey = "A foreign key is a column (or a combination of columns) that references the primary key of another table. It's used to establish a relationship between two tables, helping maintain referential integrity and ensuring data integrity by making sure the linked data stays consistent across both tables.\n\n![SQL foreign key](https://assets.roadmap.sh/guest/sql-foreign-key-8bwm3.png)\n\nA table with a foreign key constraint helps prevent unmatched records and keeps data consistent across related tables. ";

const __vite_glob_1_458 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: foreignKey
}, Symbol.toStringTag, { value: 'Module' }));

const mostCommonDiagnosis = "```sql\nSELECT \n  diagnosis, \n  COUNT(*) AS diagnosis_count\nFROM appointments\nWHERE diagnosis IS NOT NULL\nGROUP BY diagnosis\nORDER BY diagnosis_count DESC\nLIMIT 1;\n```\n\nMention that you're excluding `NULL` values since they don't represent valid data, then grouping by diagnosis to see which one appears the most. Sorting in descending order and limiting to 1 gives you the most frequent condition. ";

const __vite_glob_1_459 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: mostCommonDiagnosis
}, Symbol.toStringTag, { value: 'Module' }));

const patientsMultipleAppointments = "```sql\nSELECT \n  p.patient_id, \n  p.first_name, \n  p.last_name, \n  COUNT(a.appointment_id) AS total_appointments\nFROM patients p\nJOIN appointments a ON p.patient_id = a.patient_id\nGROUP BY p.patient_id, p.first_name, p.last_name\nHAVING COUNT(a.appointment_id) > 3;\n```\n\nTalk about how you're using a `JOIN` to connect patients to their appointments, then grouping the results to count how many appointments each patient had. Use `HAVING` to filter for those with more than three. This kind of query helps track highly engaged or frequent patients. ";

const __vite_glob_1_460 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: patientsMultipleAppointments
}, Symbol.toStringTag, { value: 'Module' }));

const patientsNoRecentVisits = "```sql\nSELECT \n  p.patient_id, \n  p.first_name, \n  p.last_name\nFROM patients p\nLEFT JOIN (\n  SELECT patient_id, MAX(appointment_date) AS last_visit\n  FROM appointments\n  GROUP BY patient_id\n) a ON p.patient_id = a.patient_id\nWHERE last_visit IS NULL OR last_visit < CURRENT_DATE - INTERVAL '1 year';\n```\n\nWalk through how you first create a subquery to find each patient's most recent appointment. Then, join that with the patient table and filter for those who haven't visited in over a year, or never visited at all. ";

const __vite_glob_1_461 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: patientsNoRecentVisits
}, Symbol.toStringTag, { value: 'Module' }));

const patientsRegistrationQuery = "```sql\nSELECT COUNT(*) AS recent_patients\nFROM patients\nWHERE registration_date >= CURRENT_DATE - INTERVAL '6 months';\n```\n\nSay that you're filtering the patient records based on their `registration_date`, using a dynamic 6-month window. This way, the query always gives an up-to-date count. Point out that `COUNT(*)` gives you the total number of new patients. ";

const __vite_glob_1_462 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: patientsRegistrationQuery
}, Symbol.toStringTag, { value: 'Module' }));

const primaryKey = "A **primary key** uniquely identifies each row in a table and is defined by a primary key constraint. It must be unique and cannot contain `NULL` values. Every table should have one primary key to ensure each record is identifiable.\n\n![Primary key in a relational database management system](https://assets.roadmap.sh/guest/primary-key-in-a-relational-database-management-system-ce6qn.png)\n\nFor example, a user table can have a unique `id` that serves as the primary key:\n\n```sql\nCREATE TABLE users (\n  id   INT PRIMARY KEY,\n  name VARCHAR(100)\n);\n-- 'id' must be unique and non-null for every row.\n``` ";

const __vite_glob_1_463 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: primaryKey
}, Symbol.toStringTag, { value: 'Module' }));

const queryOptimization = "Speed matters, especially when working with large datasets. Here's how to approach a slow query:\n\n- **Check the query plan**: See where the time is being spent.\n- **Review indexes**: Are the right columns indexed?\n- **Rewrite the query**: Try different approaches or break things into smaller parts.\n- **Simplify joins**: Double-check the join logic and order.\n- **Limit data**: Only return the columns and rows you actually need.\n- **Watch data types**: Make sure comparisons aren't causing slowdowns.\n- **Use partitioning**: For really big tables, splitting them can help.\n\nBefore optimization:\n\n```sql\nSELECT c.name, o.order_date, p.product_name, p.price\nFROM customers c, orders o, order_items oi, products p\nWHERE c.id = o.customer_id\n  AND o.id = oi.order_id\n  AND oi.product_id = p.id\n  AND o.order_date > '2022-01-01';\n```\n\nAfter optimization:\n\n```sql\nSELECT c.name, o.order_date, p.product_name, p.price\nFROM orders o\nJOIN customers c ON o.customer_id = c.id\nJOIN order_items oi ON o.id = oi.order_id\nJOIN products p ON oi.product_id = p.id\nWHERE o.order_date > '2022-01-01';\n```\n\nThe specific optimization techniques will vary based on your database system and performance bottlenecks. ";

const __vite_glob_1_464 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: queryOptimization
}, Symbol.toStringTag, { value: 'Module' }));

const rankingFunctions = "These functions assign ranks or row numbers based on ordering criteria. They behave differently when there are ties:\n\n- `ROW_NUMBER()` assigns a unique number to each row, even if the values are the same.\n- `RANK()` gives the same rank to tied rows and skips the next rank.\n- `DENSE_RANK()` also gives the same rank to ties but doesn't skip any numbers.\n\n![Difference between Rank, Dense_Rank and Row_Number](https://assets.roadmap.sh/guest/difference-between-rank-dense-rank-and-row-number-rubpc.png)\n\nThey're helpful in tasks like leaderboard generation or identifying top performers by region or category. ";

const __vite_glob_1_465 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: rankingFunctions
}, Symbol.toStringTag, { value: 'Module' }));

const revenueLastMonth = "```sql\nSELECT \n  SUM(t.cost) AS total_revenue\nFROM treatments t\nJOIN appointments a ON t.appointment_id = a.appointment_id\nWHERE a.appointment_date >= date_trunc('month', CURRENT_DATE - INTERVAL '1 month')\n  AND a.appointment_date < date_trunc('month', CURRENT_DATE);\n```\n\nSay that you're using `date_trunc` to set a clean date range for last month, then joining appointments and treatments to add up the costs. This shows the hospital's treatment-related income for the previous month. ";

const __vite_glob_1_466 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: revenueLastMonth
}, Symbol.toStringTag, { value: 'Module' }));

const sqlConstraints = "SQL constraints are rules that help keep data accurate and consistent.\n\n- `NOT NULL`: Prevents a column from having empty values.\n- `UNIQUE`: Makes sure all values in a column are different.\n- `CHECK`: Adds a condition that the values in a column must meet.\n\n**Use case**: If you're storing product prices, you can use a `CHECK` constraint to prevent negative values as shown in the snippet below:\n\n```sql\nCREATE TABLE products (\n  id INT PRIMARY KEY,\n  name VARCHAR(50) NOT NULL,\n  price DECIMAL(10, 2) CHECK (price >= 0)\n);\n``` ";

const __vite_glob_1_467 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sqlConstraints
}, Symbol.toStringTag, { value: 'Module' }));

const sqlDialects = "SQL dialects are different implementations of SQL provided by various database systems. They all follow the SQL standard used for working with data stored in multiple tables, but may include extra features or slightly different syntax.\n\nSome common SQL dialects are:\n\n- **MySQL**: Popular for web applications.\n- **PostgreSQL**: Known for its advanced features and standards compliance.\n- **Microsoft SQL Server**: Common in enterprise environments.\n- **SQLite**: Lightweight and used in mobile or embedded applications.\n\n![SQL dialects](https://assets.roadmap.sh/guest/sql-dialect-fsu1k.png)\n\nWhile the core syntax is similar, features like aggregate and scalar functions, JSON handling, or full-text search may vary slightly.\n\nAfter answering the question, feel free to ask which dialect the company uses; it's a great way to learn more about their stack and how they work. ";

const __vite_glob_1_468 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sqlDialects
}, Symbol.toStringTag, { value: 'Module' }));

const sqlEnding = "## Next steps\n\nWhen it comes to interviews, practice really matters and the learning process doesn’t stop. Spending just 30 minutes a day on SQL can make a big difference as your interview gets closer.\n\nTry mixing things up. Use SQL interview flashcards to quiz yourself and explore the  [SQL roadmap](https://roadmap.sh/sql) to go deeper into key concepts.\n\nIt might be tempting to focus only on SQL interview questions and quizzes, but don’t skip the hands-on part. Writing real queries helps you build context for technical and behavioral conversations, especially when the discussion touches on architecture or scale.\n\n";

const __vite_glob_1_469 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sqlEnding
}, Symbol.toStringTag, { value: 'Module' }));

const sqlIndex = "An index helps the database find data faster. It works like a book index, pointing to rows that match a query without scanning the entire table.\n\nFor example, you can create an index on the last name column so that you can retrieve users faster based on their last name:\n\n```sql\n-- Create an index on the last_name column\nCREATE INDEX idx_employee_last_name\nON employees (last_name);\n```\n\n![SQL index](https://assets.roadmap.sh/guest/sql-index-tp3zi.png)\n\nIndexes are great for speeding up searches, data retrieval, and JOIN operations. They're also useful for maintaining performance in large SQL databases where quick lookups matter. ";

const __vite_glob_1_470 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sqlIndex
}, Symbol.toStringTag, { value: 'Module' }));

const sqlInjectionPrevention = "SQL injection is a security issue where attackers insert malicious code or SQL statements into a query. This can expose or damage your data.\n\nTo prevent it, use parameterized queries or ORM tools that handle user input safely. ";

const __vite_glob_1_471 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sqlInjectionPrevention
}, Symbol.toStringTag, { value: 'Module' }));

const sqlJoins = "JOINs let you combine rows from two or more tables based on a related column. These are the most common types:\n\n- `INNER JOIN`: Returns only rows that match in both tables.\n- `LEFT JOIN`: Returns all rows from the left table and matching rows from the right.\n- `RIGHT JOIN`: Returns all rows from the right table and matching rows from the left.\n- `FULL JOIN`: Returns all rows when there's a match in either table.\n\nExample using `LEFT JOIN`:\n\n```sql\n-- Get users and their orders (even if they have none)  \nSELECT users.name, orders.amount  \nFROM users  \nLEFT JOIN orders ON users.id = orders.user_id;\n```\n\nThink of JOIN operations like combining spreadsheets based on related information. ";

const __vite_glob_1_472 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sqlJoins
}, Symbol.toStringTag, { value: 'Module' }));

const sqlPagination = "When you're dealing with lots of data, it's not practical to load everything at once. Pagination helps you break results into smaller chunks.\n\n**Option 1:** Simple offset-based pagination\n\n```sql\nSELECT *\nFROM products\nORDER BY name\nLIMIT 10 OFFSET 20;  -- Get records 21-30\n```\n\n**Option 2:** Keyset pagination (more efficient for big data)\n\n```sql\nSELECT *\nFROM products\nWHERE (price, id) > (100.00, 12345)  -- Based on last record from previous page\nORDER BY price ASC, id ASC\nLIMIT 10;\n```\n\nOffset-based pagination is easy to use, but it gets slower as the offset increases. Keyset pagination is better for deep scrolling or infinite lists.\n\n> **Want a deeper dive?** Our [**SQL Mastery Course**](https://roadmap.sh/courses/sql) covers indexing, transactions, and other advanced security patterns. ";

const __vite_glob_1_473 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sqlPagination
}, Symbol.toStringTag, { value: 'Module' }));

const sqlSubsets = "SQL is divided into several functional subsets:\n\n- **Data Definition Language (DDL)**: Used to define or modify database structure. This includes commands like  `CREATE`, `ALTER`, and `DROP`. For example, the `ALTER` table statement can be used to add, rename, and remove columns in a table.\n- **Data Manipulation Language (DML)**: Used to insert, update, delete, or retrieve data. This includes commands like `SELECT`, `INSERT`, `UPDATE`, and `DELETE`. For example, the `UPDATE` statement can be used to change a user's email based on their ID\n- **Data Control Language (DCL)**: Manages access to data by granting or revoking permissions. This includes commands like `GRANT` and `REVOKE`. For example, the `GRANT` statement can be used to give a user permission to select data from a table.\n\n![SQL subsets](https://assets.roadmap.sh/guest/sql-subsets-ya1je.png)\n\nThe major difference between these subsets lies in their purpose:\n\n- **DDL** affects the structure of the database.\n- **DML** interacts with the data itself.\n- **DCL** governs who can do what within the database system. ";

const __vite_glob_1_474 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sqlSubsets
}, Symbol.toStringTag, { value: 'Module' }));

const sqlView = "A **view** is a virtual table defined by a query. It simplifies complex joins or enforces read‑only access.\n\n```sql\nCREATE VIEW active_users AS\nSELECT * FROM users WHERE status = 'active';\n```\n\nViews are useful when you want to abstract complexity from end users or create role-based access to specific slices of your data. ";

const __vite_glob_1_475 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sqlView
}, Symbol.toStringTag, { value: 'Module' }));

const sqlVsOtherLanguages = "SQL is a **declarative** language. You tell the database *what* you want (for example, \"Get me a list of all active customers\") without writing out the step-by-step logic to retrieve it. The database engine figures out how to execute your request.\n\nIn contrast, languages like Java or Python are **imperative**; you write code that explains *how* to do something, including loops, conditions, and memory management.\n\n![SQL vs. other programming language](https://assets.roadmap.sh/guest/sql--vs-other-programming-language-qzfiy.png)\n\n```sql\n-- Declarative: I want all active customers\nSELECT * \nFROM customers \nWHERE status = 'active';\n``` ";

const __vite_glob_1_476 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sqlVsOtherLanguages
}, Symbol.toStringTag, { value: 'Module' }));

const storedProcedures = "Stored procedures are like saved functions in your SQL code that you write once and can run repeatedly. They're stored directly in the database, which gives them a few benefits:\n\n- **Performance**: Since they're precompiled, they often run faster than regular SQL queries.\n- **Security**: You can control who gets to run them and avoid exposing raw queries.\n- **Less network traffic**: Instead of sending multiple queries from your app to the database, you just call the procedure.\n- **Reusable logic**: You can call the same procedure from different apps or parts of your system.\n- **Easier to manage**: Business logic lives in one place, which helps with maintenance.\n\n![Stored procedure use case](https://assets.roadmap.sh/guest/stored-procedure-use-case-4nenq.png)\n\nFor example, if you have an application that constantly pulls employee data, you can create a stored procedure for it to optimize the process.\n\n```sql\n-- Create a stored procedure to get employees by department\nCREATE PROCEDURE GetEmployeesByDepartment\n    @DepartmentID INT\nAS\nBEGIN\n    SELECT name, hire_date, salary\n    FROM employees\n    WHERE department_id = @DepartmentID\n    ORDER BY hire_date DESC;\nEND;\n\n-- Call the procedure\nEXEC GetEmployeesByDepartment @DepartmentID = 3;\n```\n\nStored procedures are especially useful in enterprise systems where performance, security, and consistent logic are important. ";

const __vite_glob_1_477 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: storedProcedures
}, Symbol.toStringTag, { value: 'Module' }));

const subqueryUsage = "A subquery is a query inside another query. It helps when you want to:\n\n- Filter using aggregated data.\n- Compare a value against a dynamic list.\n- Create a temporary table for use in your main query.\n\nUse cases include checking which employees work in a particular location or identifying orders above a calculated average.\n\n```sql\n-- Subquery in WHERE clause\nSELECT name\nFROM employees\nWHERE department_id IN (\n    SELECT id \n    FROM departments \n    WHERE location = 'New York'\n);\n``` ";

const __vite_glob_1_478 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: subqueryUsage
}, Symbol.toStringTag, { value: 'Module' }));

const unionVsUnionAll = "Both combine results from two or more SELECT queries. The key difference is:\n\n- `UNION` removes duplicate rows from a table.\n- `UNION ALL` keeps all rows, including duplicates.\n\n`UNION ALL` is faster because it skips the deduplication step. Use `UNION` when you want a clean list of unique values. ";

const __vite_glob_1_479 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: unionVsUnionAll
}, Symbol.toStringTag, { value: 'Module' }));

async function getAllQuestionGroups() {
  const questionGroupFilesMap = /* #__PURE__ */ Object.assign({"/src/data/question-groups/backend/backend.md": __vite_glob_2_0,"/src/data/question-groups/data-analyst/data-analyst.md": __vite_glob_2_1,"/src/data/question-groups/data-science/data-science.md": __vite_glob_2_2,"/src/data/question-groups/devops/devops.md": __vite_glob_2_3,"/src/data/question-groups/frontend/frontend.md": __vite_glob_2_4,"/src/data/question-groups/full-stack/full-stack.md": __vite_glob_2_5,"/src/data/question-groups/golang/golang.md": __vite_glob_2_6,"/src/data/question-groups/javascript/javascript.md": __vite_glob_2_7,"/src/data/question-groups/nodejs/nodejs.md": __vite_glob_2_8,"/src/data/question-groups/react/react.md": __vite_glob_2_9,"/src/data/question-groups/sql-queries/sql-queries.md": __vite_glob_2_10,"/src/data/question-groups/sql/sql.md": __vite_glob_2_11




});
  const answerFilesMap = /* #__PURE__ */ Object.assign({"/src/data/question-groups/backend/content/anomaly-detection.md": __vite_glob_1_0,"/src/data/question-groups/backend/content/api-dependencies.md": __vite_glob_1_1,"/src/data/question-groups/backend/content/api-endpoint.md": __vite_glob_1_2,"/src/data/question-groups/backend/content/api-tests.md": __vite_glob_1_3,"/src/data/question-groups/backend/content/api-versioning.md": __vite_glob_1_4,"/src/data/question-groups/backend/content/batch-processing.md": __vite_glob_1_5,"/src/data/question-groups/backend/content/benefits-drawbacks-microservices.md": __vite_glob_1_6,"/src/data/question-groups/backend/content/bg-tasks.md": __vite_glob_1_7,"/src/data/question-groups/backend/content/blue-green-deployment.md": __vite_glob_1_8,"/src/data/question-groups/backend/content/cache-eviction.md": __vite_glob_1_9,"/src/data/question-groups/backend/content/cap-theorem.md": __vite_glob_1_10,"/src/data/question-groups/backend/content/ci-cd.md": __vite_glob_1_11,"/src/data/question-groups/backend/content/containerization.md": __vite_glob_1_12,"/src/data/question-groups/backend/content/correlation-ids.md": __vite_glob_1_13,"/src/data/question-groups/backend/content/data-encryption.md": __vite_glob_1_14,"/src/data/question-groups/backend/content/db-connections.md": __vite_glob_1_15,"/src/data/question-groups/backend/content/deadlock-db-transaction.md": __vite_glob_1_16,"/src/data/question-groups/backend/content/debugging-backend.md": __vite_glob_1_17,"/src/data/question-groups/backend/content/decompose-microservices.md": __vite_glob_1_18,"/src/data/question-groups/backend/content/distributed-caching.md": __vite_glob_1_19,"/src/data/question-groups/backend/content/eventual-consistency.md": __vite_glob_1_20,"/src/data/question-groups/backend/content/fault-tolerance.md": __vite_glob_1_21,"/src/data/question-groups/backend/content/file-uploads.md": __vite_glob_1_22,"/src/data/question-groups/backend/content/fulltext-search.md": __vite_glob_1_23,"/src/data/question-groups/backend/content/gdpr-compliance.md": __vite_glob_1_24,"/src/data/question-groups/backend/content/high-available-storage.md": __vite_glob_1_25,"/src/data/question-groups/backend/content/http-request-response-cycle.md": __vite_glob_1_26,"/src/data/question-groups/backend/content/idempotency.md": __vite_glob_1_27,"/src/data/question-groups/backend/content/instrument-monitor.md": __vite_glob_1_28,"/src/data/question-groups/backend/content/iot-streams.md": __vite_glob_1_29,"/src/data/question-groups/backend/content/load-balanced-session.md": __vite_glob_1_30,"/src/data/question-groups/backend/content/load-testing-api.md": __vite_glob_1_31,"/src/data/question-groups/backend/content/long-running.md": __vite_glob_1_32,"/src/data/question-groups/backend/content/maintainable-code.md": __vite_glob_1_33,"/src/data/question-groups/backend/content/message-queue.md": __vite_glob_1_34,"/src/data/question-groups/backend/content/optimistic-vs-pessimistic.md": __vite_glob_1_35,"/src/data/question-groups/backend/content/protect-sql-injection.md": __vite_glob_1_36,"/src/data/question-groups/backend/content/rate-limiting.md": __vite_glob_1_37,"/src/data/question-groups/backend/content/realtime-data-sync.md": __vite_glob_1_38,"/src/data/question-groups/backend/content/rest-core-principles.md": __vite_glob_1_39,"/src/data/question-groups/backend/content/reverse-proxy.md": __vite_glob_1_40,"/src/data/question-groups/backend/content/scale-backend.md": __vite_glob_1_41,"/src/data/question-groups/backend/content/schema-migrations.md": __vite_glob_1_42,"/src/data/question-groups/backend/content/secure-api.md": __vite_glob_1_43,"/src/data/question-groups/backend/content/secure-interservice.md": __vite_glob_1_44,"/src/data/question-groups/backend/content/session-management.md": __vite_glob_1_45,"/src/data/question-groups/backend/content/sql-vs-nosql.md": __vite_glob_1_46,"/src/data/question-groups/backend/content/sso.md": __vite_glob_1_47,"/src/data/question-groups/backend/content/statelessness-http.md": __vite_glob_1_48,"/src/data/question-groups/backend/content/webhooks.md": __vite_glob_1_49,"/src/data/question-groups/data-analyst/content/advanced-data-integration.md": __vite_glob_1_50,"/src/data/question-groups/data-analyst/content/advanced-data-wrangling.md": __vite_glob_1_51,"/src/data/question-groups/data-analyst/content/advanced-missing-data.md": __vite_glob_1_52,"/src/data/question-groups/data-analyst/content/advanced-multivariate.md": __vite_glob_1_53,"/src/data/question-groups/data-analyst/content/advanced-profiling.md": __vite_glob_1_54,"/src/data/question-groups/data-analyst/content/analysis-types.md": __vite_glob_1_55,"/src/data/question-groups/data-analyst/content/analytics-types.md": __vite_glob_1_56,"/src/data/question-groups/data-analyst/content/clustering-analysis.md": __vite_glob_1_57,"/src/data/question-groups/data-analyst/content/combined-analysis.md": __vite_glob_1_58,"/src/data/question-groups/data-analyst/content/data-aggregation.md": __vite_glob_1_59,"/src/data/question-groups/data-analyst/content/data-analysis-process.md": __vite_glob_1_60,"/src/data/question-groups/data-analyst/content/data-analyst-role.md": __vite_glob_1_61,"/src/data/question-groups/data-analyst/content/data-challenges.md": __vite_glob_1_62,"/src/data/question-groups/data-analyst/content/data-cleaning.md": __vite_glob_1_63,"/src/data/question-groups/data-analyst/content/data-formats.md": __vite_glob_1_64,"/src/data/question-groups/data-analyst/content/data-integrity-strategies.md": __vite_glob_1_65,"/src/data/question-groups/data-analyst/content/data-mining.md": __vite_glob_1_66,"/src/data/question-groups/data-analyst/content/data-modeling-experience.md": __vite_glob_1_67,"/src/data/question-groups/data-analyst/content/data-modeling.md": __vite_glob_1_68,"/src/data/question-groups/data-analyst/content/data-profiling.md": __vite_glob_1_69,"/src/data/question-groups/data-analyst/content/data-quality.md": __vite_glob_1_70,"/src/data/question-groups/data-analyst/content/data-storage-approaches.md": __vite_glob_1_71,"/src/data/question-groups/data-analyst/content/data-transformation-process.md": __vite_glob_1_72,"/src/data/question-groups/data-analyst/content/data-types.md": __vite_glob_1_73,"/src/data/question-groups/data-analyst/content/data-validation.md": __vite_glob_1_74,"/src/data/question-groups/data-analyst/content/data-visualization.md": __vite_glob_1_75,"/src/data/question-groups/data-analyst/content/data-wrangling.md": __vite_glob_1_76,"/src/data/question-groups/data-analyst/content/descriptive-analysis.md": __vite_glob_1_77,"/src/data/question-groups/data-analyst/content/duplicate-data.md": __vite_glob_1_78,"/src/data/question-groups/data-analyst/content/excel-tools.md": __vite_glob_1_79,"/src/data/question-groups/data-analyst/content/excel-usage.md": __vite_glob_1_80,"/src/data/question-groups/data-analyst/content/exploratory-data-analysis.md": __vite_glob_1_81,"/src/data/question-groups/data-analyst/content/hypothesis-testing.md": __vite_glob_1_82,"/src/data/question-groups/data-analyst/content/large-dataset-modification.md": __vite_glob_1_83,"/src/data/question-groups/data-analyst/content/missing-data.md": __vite_glob_1_84,"/src/data/question-groups/data-analyst/content/mixed-data-regression.md": __vite_glob_1_85,"/src/data/question-groups/data-analyst/content/pca-analysis.md": __vite_glob_1_86,"/src/data/question-groups/data-analyst/content/pca-scenario.md": __vite_glob_1_87,"/src/data/question-groups/data-analyst/content/probability-distributions.md": __vite_glob_1_88,"/src/data/question-groups/data-analyst/content/profiling-methods.md": __vite_glob_1_89,"/src/data/question-groups/data-analyst/content/record-modification.md": __vite_glob_1_90,"/src/data/question-groups/data-analyst/content/regression-analysis.md": __vite_glob_1_91,"/src/data/question-groups/data-analyst/content/regression-comparison.md": __vite_glob_1_92,"/src/data/question-groups/data-analyst/content/sales-clustering.md": __vite_glob_1_93,"/src/data/question-groups/data-analyst/content/statistical-hypothesis.md": __vite_glob_1_94,"/src/data/question-groups/data-analyst/content/statistical-models.md": __vite_glob_1_95,"/src/data/question-groups/data-analyst/content/stats-viz-integration.md": __vite_glob_1_96,"/src/data/question-groups/data-analyst/content/unstructured-data-aggregation.md": __vite_glob_1_97,"/src/data/question-groups/data-analyst/content/visualization-decisions.md": __vite_glob_1_98,"/src/data/question-groups/data-analyst/content/visualization-eda.md": __vite_glob_1_99,"/src/data/question-groups/data-science/content/accuracy-from-confusion-matrix.md": __vite_glob_1_100,"/src/data/question-groups/data-science/content/apply-vs-map-pandas.md": __vite_glob_1_101,"/src/data/question-groups/data-science/content/bagging-vs-boosting.md": __vite_glob_1_102,"/src/data/question-groups/data-science/content/batch-vs-online-learning.md": __vite_glob_1_103,"/src/data/question-groups/data-science/content/bias-variance-tradeoff.md": __vite_glob_1_104,"/src/data/question-groups/data-science/content/categorical-vs-continuous-variables.md": __vite_glob_1_105,"/src/data/question-groups/data-science/content/central-limit-theorem.md": __vite_glob_1_106,"/src/data/question-groups/data-science/content/combining-data-from-multiple-sources.md": __vite_glob_1_107,"/src/data/question-groups/data-science/content/confidence-intervals.md": __vite_glob_1_108,"/src/data/question-groups/data-science/content/confusion-matrix.md": __vite_glob_1_109,"/src/data/question-groups/data-science/content/correlation-vs-causation.md": __vite_glob_1_110,"/src/data/question-groups/data-science/content/cross-validation.md": __vite_glob_1_111,"/src/data/question-groups/data-science/content/decision-trees.md": __vite_glob_1_112,"/src/data/question-groups/data-science/content/deep-learning-vs-traditional-ml.md": __vite_glob_1_113,"/src/data/question-groups/data-science/content/detect-concept-drift.md": __vite_glob_1_114,"/src/data/question-groups/data-science/content/ensure-fairness-remove-bias.md": __vite_glob_1_115,"/src/data/question-groups/data-science/content/evaluate-dataset-usefulness.md": __vite_glob_1_116,"/src/data/question-groups/data-science/content/evaluate-medical-classification-model.md": __vite_glob_1_117,"/src/data/question-groups/data-science/content/evaluation-metrics.md": __vite_glob_1_118,"/src/data/question-groups/data-science/content/false-positive-vs-negative.md": __vite_glob_1_119,"/src/data/question-groups/data-science/content/feature-selection.md": __vite_glob_1_120,"/src/data/question-groups/data-science/content/fine-tuning-vs-more-data.md": __vite_glob_1_121,"/src/data/question-groups/data-science/content/group-aggregate-data-python.md": __vite_glob_1_122,"/src/data/question-groups/data-science/content/handling-missing-data.md": __vite_glob_1_123,"/src/data/question-groups/data-science/content/handling-null-values-pandas.md": __vite_glob_1_124,"/src/data/question-groups/data-science/content/imbalanced-data.md": __vite_glob_1_125,"/src/data/question-groups/data-science/content/investigate-traffic-drop.md": __vite_glob_1_126,"/src/data/question-groups/data-science/content/kmeans-clustering-python.md": __vite_glob_1_127,"/src/data/question-groups/data-science/content/knn-vs-kmeans.md": __vite_glob_1_128,"/src/data/question-groups/data-science/content/lindeberg-feller-clt.md": __vite_glob_1_129,"/src/data/question-groups/data-science/content/linear-regression.md": __vite_glob_1_130,"/src/data/question-groups/data-science/content/linear-vs-logistic-regression.md": __vite_glob_1_131,"/src/data/question-groups/data-science/content/logistic-regression.md": __vite_glob_1_132,"/src/data/question-groups/data-science/content/long-format-vs-wide-format.md": __vite_glob_1_133,"/src/data/question-groups/data-science/content/long-tail-distribution.md": __vite_glob_1_134,"/src/data/question-groups/data-science/content/measure-product-launch-success.md": __vite_glob_1_135,"/src/data/question-groups/data-science/content/merge-overlapping-intervals.md": __vite_glob_1_136,"/src/data/question-groups/data-science/content/model-accuracy-business-impact.md": __vite_glob_1_137,"/src/data/question-groups/data-science/content/monitor-model-performance.md": __vite_glob_1_138,"/src/data/question-groups/data-science/content/multicollinearity.md": __vite_glob_1_139,"/src/data/question-groups/data-science/content/null-hypothesis.md": __vite_glob_1_140,"/src/data/question-groups/data-science/content/overfitting-prevention.md": __vite_glob_1_141,"/src/data/question-groups/data-science/content/p-value-interpretation.md": __vite_glob_1_142,"/src/data/question-groups/data-science/content/probability-distributions.md": __vite_glob_1_143,"/src/data/question-groups/data-science/content/random-forest-vs-decision-tree.md": __vite_glob_1_144,"/src/data/question-groups/data-science/content/rank-sql-sequence.md": __vite_glob_1_145,"/src/data/question-groups/data-science/content/real-time-median.md": __vite_glob_1_146,"/src/data/question-groups/data-science/content/regularization.md": __vite_glob_1_147,"/src/data/question-groups/data-science/content/remove-duplicates-dataframe.md": __vite_glob_1_148,"/src/data/question-groups/data-science/content/right-vs-left-join.md": __vite_glob_1_149,"/src/data/question-groups/data-science/content/rmse-mse-linear-regression.md": __vite_glob_1_150,"/src/data/question-groups/data-science/content/role-of-statistics.md": __vite_glob_1_151,"/src/data/question-groups/data-science/content/sql-joining-orders-customers.md": __vite_glob_1_152,"/src/data/question-groups/data-science/content/sql-second-highest-salary.md": __vite_glob_1_153,"/src/data/question-groups/data-science/content/sql-top-customers-last-quarter.md": __vite_glob_1_154,"/src/data/question-groups/data-science/content/sql-top-customers-revenue.md": __vite_glob_1_155,"/src/data/question-groups/data-science/content/support-vectors-svm.md": __vite_glob_1_156,"/src/data/question-groups/data-science/content/t-test-vs-z-test.md": __vite_glob_1_157,"/src/data/question-groups/data-science/content/type-i-vs-type-ii-errors.md": __vite_glob_1_158,"/src/data/question-groups/data-science/content/types-of-machine-learning.md": __vite_glob_1_159,"/src/data/question-groups/data-science/content/univariate-bivariate-multivariate.md": __vite_glob_1_160,"/src/data/question-groups/data-science/content/variance-in-data-science.md": __vite_glob_1_161,"/src/data/question-groups/data-science/content/wide-to-long-format.md": __vite_glob_1_162,"/src/data/question-groups/devops/content/ansible-benefits.md": __vite_glob_1_163,"/src/data/question-groups/devops/content/auto-scaling.md": __vite_glob_1_164,"/src/data/question-groups/devops/content/blue-green-deployment.md": __vite_glob_1_165,"/src/data/question-groups/devops/content/build-pipelines.md": __vite_glob_1_166,"/src/data/question-groups/devops/content/canary-release.md": __vite_glob_1_167,"/src/data/question-groups/devops/content/cicd-setup.md": __vite_glob_1_168,"/src/data/question-groups/devops/content/cluster-health.md": __vite_glob_1_169,"/src/data/question-groups/devops/content/common-iac-tools.md": __vite_glob_1_170,"/src/data/question-groups/devops/content/container-consistency.md": __vite_glob_1_171,"/src/data/question-groups/devops/content/container-vs-vm.md": __vite_glob_1_172,"/src/data/question-groups/devops/content/continuous-monitoring.md": __vite_glob_1_173,"/src/data/question-groups/devops/content/data-migration.md": __vite_glob_1_174,"/src/data/question-groups/devops/content/devsecops.md": __vite_glob_1_175,"/src/data/question-groups/devops/content/docker-compose.md": __vite_glob_1_176,"/src/data/question-groups/devops/content/explain-ci-vs-cd.md": __vite_glob_1_177,"/src/data/question-groups/devops/content/health-monitor.md": __vite_glob_1_178,"/src/data/question-groups/devops/content/high-availability.md": __vite_glob_1_179,"/src/data/question-groups/devops/content/iac-concept.md": __vite_glob_1_180,"/src/data/question-groups/devops/content/implement-logging.md": __vite_glob_1_181,"/src/data/question-groups/devops/content/kubernetes-components.md": __vite_glob_1_182,"/src/data/question-groups/devops/content/kubernetes-operators.md": __vite_glob_1_183,"/src/data/question-groups/devops/content/load-balancer.md": __vite_glob_1_184,"/src/data/question-groups/devops/content/microservice-challenges.md": __vite_glob_1_185,"/src/data/question-groups/devops/content/microservice-vs-monolithic.md": __vite_glob_1_186,"/src/data/question-groups/devops/content/migrate-environment.md": __vite_glob_1_187,"/src/data/question-groups/devops/content/multi-cloud-kubernetes.md": __vite_glob_1_188,"/src/data/question-groups/devops/content/multi-cloud.md": __vite_glob_1_189,"/src/data/question-groups/devops/content/network-configuration.md": __vite_glob_1_190,"/src/data/question-groups/devops/content/optimize-cicd.md": __vite_glob_1_191,"/src/data/question-groups/devops/content/orchestration.md": __vite_glob_1_192,"/src/data/question-groups/devops/content/popular-cicd-tools.md": __vite_glob_1_193,"/src/data/question-groups/devops/content/purpose-of-cm.md": __vite_glob_1_194,"/src/data/question-groups/devops/content/reverse-proxy.md": __vite_glob_1_195,"/src/data/question-groups/devops/content/role-of-devops.md": __vite_glob_1_196,"/src/data/question-groups/devops/content/scaling-differences.md": __vite_glob_1_197,"/src/data/question-groups/devops/content/secret-management.md": __vite_glob_1_198,"/src/data/question-groups/devops/content/serverless-computing.md": __vite_glob_1_199,"/src/data/question-groups/devops/content/stateful-applications.md": __vite_glob_1_200,"/src/data/question-groups/devops/content/what-is-devops.md": __vite_glob_1_201,"/src/data/question-groups/devops/content/what-is-docker.md": __vite_glob_1_202,"/src/data/question-groups/devops/content/what-is-gitops.md": __vite_glob_1_203,"/src/data/question-groups/devops/content/what-is-helm-chart.md": __vite_glob_1_204,"/src/data/question-groups/devops/content/what-is-iac.md": __vite_glob_1_205,"/src/data/question-groups/devops/content/what-is-kubernetes.md": __vite_glob_1_206,"/src/data/question-groups/devops/content/what-is-prometheus.md": __vite_glob_1_207,"/src/data/question-groups/devops/content/what-is-rollback.md": __vite_glob_1_208,"/src/data/question-groups/devops/content/what-is-service-mesh.md": __vite_glob_1_209,"/src/data/question-groups/devops/content/what-is-shift-left.md": __vite_glob_1_210,"/src/data/question-groups/devops/content/what-is-version-control.md": __vite_glob_1_211,"/src/data/question-groups/devops/content/zero-downtime.md": __vite_glob_1_212,"/src/data/question-groups/frontend/content/async-ops-js.md": __vite_glob_1_213,"/src/data/question-groups/frontend/content/block-inline-elems.md": __vite_glob_1_214,"/src/data/question-groups/frontend/content/box-model.md": __vite_glob_1_215,"/src/data/question-groups/frontend/content/browser-render.md": __vite_glob_1_216,"/src/data/question-groups/frontend/content/client-storage.md": __vite_glob_1_217,"/src/data/question-groups/frontend/content/closures.md": __vite_glob_1_218,"/src/data/question-groups/frontend/content/critical-css.md": __vite_glob_1_219,"/src/data/question-groups/frontend/content/csp.md": __vite_glob_1_220,"/src/data/question-groups/frontend/content/css-grid.md": __vite_glob_1_221,"/src/data/question-groups/frontend/content/css-specificity.md": __vite_glob_1_222,"/src/data/question-groups/frontend/content/css-variables.md": __vite_glob_1_223,"/src/data/question-groups/frontend/content/dom.md": __vite_glob_1_224,"/src/data/question-groups/frontend/content/em-vs-rem.md": __vite_glob_1_225,"/src/data/question-groups/frontend/content/event-delegation.md": __vite_glob_1_226,"/src/data/question-groups/frontend/content/event-listeners.md": __vite_glob_1_227,"/src/data/question-groups/frontend/content/event-loop-js.md": __vite_glob_1_228,"/src/data/question-groups/frontend/content/flexbox-layout.md": __vite_glob_1_229,"/src/data/question-groups/frontend/content/id-vs-class.md": __vite_glob_1_230,"/src/data/question-groups/frontend/content/improve-web-perf.md": __vite_glob_1_231,"/src/data/question-groups/frontend/content/js-promises.md": __vite_glob_1_232,"/src/data/question-groups/frontend/content/media-queries.md": __vite_glob_1_233,"/src/data/question-groups/frontend/content/null-vs-undefined.md": __vite_glob_1_234,"/src/data/question-groups/frontend/content/optimize-assets.md": __vite_glob_1_235,"/src/data/question-groups/frontend/content/same-origin-policy.md": __vite_glob_1_236,"/src/data/question-groups/frontend/content/seo-best-practices.md": __vite_glob_1_237,"/src/data/question-groups/frontend/content/service-workers.md": __vite_glob_1_238,"/src/data/question-groups/frontend/content/ssr-when.md": __vite_glob_1_239,"/src/data/question-groups/frontend/content/state-mgmt-spa.md": __vite_glob_1_240,"/src/data/question-groups/frontend/content/tree-shaking.md": __vite_glob_1_241,"/src/data/question-groups/frontend/content/vdom.md": __vite_glob_1_242,"/src/data/question-groups/full-stack/content/api-security.md": __vite_glob_1_243,"/src/data/question-groups/full-stack/content/async-javascript.md": __vite_glob_1_244,"/src/data/question-groups/full-stack/content/backend-caching.md": __vite_glob_1_245,"/src/data/question-groups/full-stack/content/build-tools.md": __vite_glob_1_246,"/src/data/question-groups/full-stack/content/cicd-pipelines.md": __vite_glob_1_247,"/src/data/question-groups/full-stack/content/client-server-programming.md": __vite_glob_1_248,"/src/data/question-groups/full-stack/content/cloud-deployment.md": __vite_glob_1_249,"/src/data/question-groups/full-stack/content/code-splitting.md": __vite_glob_1_250,"/src/data/question-groups/full-stack/content/common-challenges.md": __vite_glob_1_251,"/src/data/question-groups/full-stack/content/cors-handling.md": __vite_glob_1_252,"/src/data/question-groups/full-stack/content/css-selectors.md": __vite_glob_1_253,"/src/data/question-groups/full-stack/content/database-migrations.md": __vite_glob_1_254,"/src/data/question-groups/full-stack/content/database-relationships.md": __vite_glob_1_255,"/src/data/question-groups/full-stack/content/div-span-purpose.md": __vite_glob_1_256,"/src/data/question-groups/full-stack/content/docker-role.md": __vite_glob_1_257,"/src/data/question-groups/full-stack/content/environment-variables.md": __vite_glob_1_258,"/src/data/question-groups/full-stack/content/event-driven-architecture.md": __vite_glob_1_259,"/src/data/question-groups/full-stack/content/flexbox-vs-grid.md": __vite_glob_1_260,"/src/data/question-groups/full-stack/content/full-stack-debugging.md": __vite_glob_1_261,"/src/data/question-groups/full-stack/content/full-stack-development.md": __vite_glob_1_262,"/src/data/question-groups/full-stack/content/full-stack-end.md": __vite_glob_1_263,"/src/data/question-groups/full-stack/content/get-post-difference.md": __vite_glob_1_264,"/src/data/question-groups/full-stack/content/graphql-vs-rest.md": __vite_glob_1_265,"/src/data/question-groups/full-stack/content/high-availability.md": __vite_glob_1_266,"/src/data/question-groups/full-stack/content/html-css-js-purpose.md": __vite_glob_1_267,"/src/data/question-groups/full-stack/content/include-css.md": __vite_glob_1_268,"/src/data/question-groups/full-stack/content/internationalization.md": __vite_glob_1_269,"/src/data/question-groups/full-stack/content/js-dom-manipulation.md": __vite_glob_1_270,"/src/data/question-groups/full-stack/content/js-equality-operators.md": __vite_glob_1_271,"/src/data/question-groups/full-stack/content/memory-leaks.md": __vite_glob_1_272,"/src/data/question-groups/full-stack/content/microservices.md": __vite_glob_1_273,"/src/data/question-groups/full-stack/content/mvc-architecture.md": __vite_glob_1_274,"/src/data/question-groups/full-stack/content/nodejs-database-crud.md": __vite_glob_1_275,"/src/data/question-groups/full-stack/content/nodejs-middleware.md": __vite_glob_1_276,"/src/data/question-groups/full-stack/content/package-json-purpose.md": __vite_glob_1_277,"/src/data/question-groups/full-stack/content/performance-monitoring.md": __vite_glob_1_278,"/src/data/question-groups/full-stack/content/postman-testing.md": __vite_glob_1_279,"/src/data/question-groups/full-stack/content/react-hooks.md": __vite_glob_1_280,"/src/data/question-groups/full-stack/content/react-performance.md": __vite_glob_1_281,"/src/data/question-groups/full-stack/content/react-seo.md": __vite_glob_1_282,"/src/data/question-groups/full-stack/content/react-ssr.md": __vite_glob_1_283,"/src/data/question-groups/full-stack/content/react-state-management.md": __vite_glob_1_284,"/src/data/question-groups/full-stack/content/real-time-updates.md": __vite_glob_1_285,"/src/data/question-groups/full-stack/content/relational-vs-nosql.md": __vite_glob_1_286,"/src/data/question-groups/full-stack/content/responsive-design.md": __vite_glob_1_287,"/src/data/question-groups/full-stack/content/rest-api.md": __vite_glob_1_288,"/src/data/question-groups/full-stack/content/rest-pagination.md": __vite_glob_1_289,"/src/data/question-groups/full-stack/content/security-vulnerabilities.md": __vite_glob_1_290,"/src/data/question-groups/full-stack/content/user-authentication.md": __vite_glob_1_291,"/src/data/question-groups/full-stack/content/version-control.md": __vite_glob_1_292,"/src/data/question-groups/full-stack/content/websockets.md": __vite_glob_1_293,"/src/data/question-groups/golang/content/basic-data-types.md": __vite_glob_1_294,"/src/data/question-groups/golang/content/channels-communication.md": __vite_glob_1_295,"/src/data/question-groups/golang/content/code-analysis.md": __vite_glob_1_296,"/src/data/question-groups/golang/content/code-reusability.md": __vite_glob_1_297,"/src/data/question-groups/golang/content/composite-data-types.md": __vite_glob_1_298,"/src/data/question-groups/golang/content/concurrency-management.md": __vite_glob_1_299,"/src/data/question-groups/golang/content/concurrency-model.md": __vite_glob_1_300,"/src/data/question-groups/golang/content/custom-error-types.md": __vite_glob_1_301,"/src/data/question-groups/golang/content/data-type-conversion.md": __vite_glob_1_302,"/src/data/question-groups/golang/content/dependency-comparison.md": __vite_glob_1_303,"/src/data/question-groups/golang/content/dependency-integration.md": __vite_glob_1_304,"/src/data/question-groups/golang/content/dependency-management.md": __vite_glob_1_305,"/src/data/question-groups/golang/content/dependency-version-control.md": __vite_glob_1_306,"/src/data/question-groups/golang/content/efficient-memory-management.md": __vite_glob_1_307,"/src/data/question-groups/golang/content/error-handling-comparison.md": __vite_glob_1_308,"/src/data/question-groups/golang/content/error-handling.md": __vite_glob_1_309,"/src/data/question-groups/golang/content/function-calls.md": __vite_glob_1_310,"/src/data/question-groups/golang/content/function-execution.md": __vite_glob_1_311,"/src/data/question-groups/golang/content/function-interaction.md": __vite_glob_1_312,"/src/data/question-groups/golang/content/garbage-collection-effects.md": __vite_glob_1_313,"/src/data/question-groups/golang/content/global-variable-implications.md": __vite_glob_1_314,"/src/data/question-groups/golang/content/global-variables.md": __vite_glob_1_315,"/src/data/question-groups/golang/content/golang-intro.md": __vite_glob_1_316,"/src/data/question-groups/golang/content/goroutine-scheduling.md": __vite_glob_1_317,"/src/data/question-groups/golang/content/json-processing.md": __vite_glob_1_318,"/src/data/question-groups/golang/content/low-level-pointers.md": __vite_glob_1_319,"/src/data/question-groups/golang/content/maps-usage.md": __vite_glob_1_320,"/src/data/question-groups/golang/content/memory-allocation-gc.md": __vite_glob_1_321,"/src/data/question-groups/golang/content/memory-allocation.md": __vite_glob_1_322,"/src/data/question-groups/golang/content/memory-leak-prevention.md": __vite_glob_1_323,"/src/data/question-groups/golang/content/memory-leak-strategies.md": __vite_glob_1_324,"/src/data/question-groups/golang/content/memory-management.md": __vite_glob_1_325,"/src/data/question-groups/golang/content/method-overloading.md": __vite_glob_1_326,"/src/data/question-groups/golang/content/method-signatures.md": __vite_glob_1_327,"/src/data/question-groups/golang/content/multiple-return-values.md": __vite_glob_1_328,"/src/data/question-groups/golang/content/package-main.md": __vite_glob_1_329,"/src/data/question-groups/golang/content/pointer-variables.md": __vite_glob_1_330,"/src/data/question-groups/golang/content/pointers-detail.md": __vite_glob_1_331,"/src/data/question-groups/golang/content/polymorphism.md": __vite_glob_1_332,"/src/data/question-groups/golang/content/reserved-keywords.md": __vite_glob_1_333,"/src/data/question-groups/golang/content/runtime-impact.md": __vite_glob_1_334,"/src/data/question-groups/golang/content/string-literals.md": __vite_glob_1_335,"/src/data/question-groups/golang/content/struct-pointers.md": __vite_glob_1_336,"/src/data/question-groups/golang/content/structs.md": __vite_glob_1_337,"/src/data/question-groups/golang/content/testing-package.md": __vite_glob_1_338,"/src/data/question-groups/golang/content/type-conversion-importance.md": __vite_glob_1_339,"/src/data/question-groups/golang/content/type-conversion.md": __vite_glob_1_340,"/src/data/question-groups/golang/content/unit-testing.md": __vite_glob_1_341,"/src/data/question-groups/golang/content/value-reference-types.md": __vite_glob_1_342,"/src/data/question-groups/golang/content/variable-declaration.md": __vite_glob_1_343,"/src/data/question-groups/javascript/content/add-method-to-object.md": __vite_glob_1_344,"/src/data/question-groups/javascript/content/add-remove-array-items.md": __vite_glob_1_345,"/src/data/question-groups/javascript/content/adding-javascript-to-html.md": __vite_glob_1_346,"/src/data/question-groups/javascript/content/addition-operator-result.md": __vite_glob_1_347,"/src/data/question-groups/javascript/content/array-loop.md": __vite_glob_1_348,"/src/data/question-groups/javascript/content/array-methods.md": __vite_glob_1_349,"/src/data/question-groups/javascript/content/arrays-creation.md": __vite_glob_1_350,"/src/data/question-groups/javascript/content/arrow-functions.md": __vite_glob_1_351,"/src/data/question-groups/javascript/content/asynchronous-javascript.md": __vite_glob_1_352,"/src/data/question-groups/javascript/content/bom.md": __vite_glob_1_353,"/src/data/question-groups/javascript/content/callback-higher-order-functions.md": __vite_glob_1_354,"/src/data/question-groups/javascript/content/check-object-property.md": __vite_glob_1_355,"/src/data/question-groups/javascript/content/clear-array.md": __vite_glob_1_356,"/src/data/question-groups/javascript/content/constructor-function.md": __vite_glob_1_357,"/src/data/question-groups/javascript/content/css-selectors-javascript.md": __vite_glob_1_358,"/src/data/question-groups/javascript/content/destructuring.md": __vite_glob_1_359,"/src/data/question-groups/javascript/content/dom.md": __vite_glob_1_360,"/src/data/question-groups/javascript/content/equality-operators.md": __vite_glob_1_361,"/src/data/question-groups/javascript/content/error-monitoring.md": __vite_glob_1_362,"/src/data/question-groups/javascript/content/even-odd-check.md": __vite_glob_1_363,"/src/data/question-groups/javascript/content/function-declarations-expressions.md": __vite_glob_1_364,"/src/data/question-groups/javascript/content/function-scope.md": __vite_glob_1_365,"/src/data/question-groups/javascript/content/global-local-scope.md": __vite_glob_1_366,"/src/data/question-groups/javascript/content/global-object.md": __vite_glob_1_367,"/src/data/question-groups/javascript/content/hoisting.md": __vite_glob_1_368,"/src/data/question-groups/javascript/content/iife.md": __vite_glob_1_369,"/src/data/question-groups/javascript/content/imports-exports.md": __vite_glob_1_370,"/src/data/question-groups/javascript/content/innerhtml-vs-innertext.md": __vite_glob_1_371,"/src/data/question-groups/javascript/content/isnan-function.md": __vite_glob_1_372,"/src/data/question-groups/javascript/content/java-vs-javascript.md": __vite_glob_1_373,"/src/data/question-groups/javascript/content/javascript-data-types.md": __vite_glob_1_374,"/src/data/question-groups/javascript/content/javascript-ending.md": __vite_glob_1_375,"/src/data/question-groups/javascript/content/javascript-frameworks.md": __vite_glob_1_376,"/src/data/question-groups/javascript/content/logical-error.md": __vite_glob_1_377,"/src/data/question-groups/javascript/content/object-create.md": __vite_glob_1_378,"/src/data/question-groups/javascript/content/prototype-inheritance.md": __vite_glob_1_379,"/src/data/question-groups/javascript/content/recursive-function.md": __vite_glob_1_380,"/src/data/question-groups/javascript/content/reference-vs-syntax-error.md": __vite_glob_1_381,"/src/data/question-groups/javascript/content/remove-duplicates.md": __vite_glob_1_382,"/src/data/question-groups/javascript/content/rest-parameter.md": __vite_glob_1_383,"/src/data/question-groups/javascript/content/reverse-string-function.md": __vite_glob_1_384,"/src/data/question-groups/javascript/content/spread-array-output.md": __vite_glob_1_385,"/src/data/question-groups/javascript/content/spread-operator-objects.md": __vite_glob_1_386,"/src/data/question-groups/javascript/content/strict-mode.md": __vite_glob_1_387,"/src/data/question-groups/javascript/content/substring-check.md": __vite_glob_1_388,"/src/data/question-groups/javascript/content/this-keyword.md": __vite_glob_1_389,"/src/data/question-groups/javascript/content/undefined-vs-null.md": __vite_glob_1_390,"/src/data/question-groups/javascript/content/variable-declaration.md": __vite_glob_1_391,"/src/data/question-groups/javascript/content/variable-naming-conventions.md": __vite_glob_1_392,"/src/data/question-groups/javascript/content/window-vs-document.md": __vite_glob_1_393,"/src/data/question-groups/nodejs/content/commonjs-vs-esm.md": __vite_glob_1_394,"/src/data/question-groups/nodejs/content/error-handling.md": __vite_glob_1_395,"/src/data/question-groups/nodejs/content/exit-codes.md": __vite_glob_1_396,"/src/data/question-groups/nodejs/content/input-from-command-line.md": __vite_glob_1_397,"/src/data/question-groups/nodejs/content/order-priority.md": __vite_glob_1_398,"/src/data/question-groups/nodejs/content/process-argv.md": __vite_glob_1_399,"/src/data/question-groups/nodejs/content/process-cwd-vs-dirname.md": __vite_glob_1_400,"/src/data/question-groups/nodejs/content/web-server.md": __vite_glob_1_401,"/src/data/question-groups/react/content/component-lifecycle.md": __vite_glob_1_402,"/src/data/question-groups/react/content/controlled-vs-uncontrolled.md": __vite_glob_1_403,"/src/data/question-groups/react/content/create-portal.md": __vite_glob_1_404,"/src/data/question-groups/react/content/custom-hook.md": __vite_glob_1_405,"/src/data/question-groups/react/content/error-boundaries.md": __vite_glob_1_406,"/src/data/question-groups/react/content/flush-sync.md": __vite_glob_1_407,"/src/data/question-groups/react/content/investigate-slow-app.md": __vite_glob_1_408,"/src/data/question-groups/react/content/lazy-loading.md": __vite_glob_1_409,"/src/data/question-groups/react/content/pure-components.md": __vite_glob_1_410,"/src/data/question-groups/react/content/re-renders.md": __vite_glob_1_411,"/src/data/question-groups/react/content/ref-forwarding.md": __vite_glob_1_412,"/src/data/question-groups/react/content/render-list.md": __vite_glob_1_413,"/src/data/question-groups/react/content/strict-mode.md": __vite_glob_1_414,"/src/data/question-groups/react/content/suspense.md": __vite_glob_1_415,"/src/data/question-groups/react/content/synthetic-events.md": __vite_glob_1_416,"/src/data/question-groups/react/content/use-transition.md": __vite_glob_1_417,"/src/data/question-groups/react/content/virtual-dom.md": __vite_glob_1_418,"/src/data/question-groups/sql-queries/content/avoid-select-star.md": __vite_glob_1_419,"/src/data/question-groups/sql-queries/content/correlated-subquery.md": __vite_glob_1_420,"/src/data/question-groups/sql-queries/content/count-star-vs-count-column.md": __vite_glob_1_421,"/src/data/question-groups/sql-queries/content/count-users-by-country.md": __vite_glob_1_422,"/src/data/question-groups/sql-queries/content/detect-date-gaps.md": __vite_glob_1_423,"/src/data/question-groups/sql-queries/content/employees-above-average-salary.md": __vite_glob_1_424,"/src/data/question-groups/sql-queries/content/exists-vs-in.md": __vite_glob_1_425,"/src/data/question-groups/sql-queries/content/find-duplicates.md": __vite_glob_1_426,"/src/data/question-groups/sql-queries/content/foreign-key.md": __vite_glob_1_427,"/src/data/question-groups/sql-queries/content/group-by-mistakes.md": __vite_glob_1_428,"/src/data/question-groups/sql-queries/content/group-by-without-aggregate.md": __vite_glob_1_429,"/src/data/question-groups/sql-queries/content/group-by-work.md": __vite_glob_1_430,"/src/data/question-groups/sql-queries/content/indexes-usefulness.md": __vite_glob_1_431,"/src/data/question-groups/sql-queries/content/inner-join-vs-left-join.md": __vite_glob_1_432,"/src/data/question-groups/sql-queries/content/lag-lead-functions.md": __vite_glob_1_433,"/src/data/question-groups/sql-queries/content/missing-indexes-impact.md": __vite_glob_1_434,"/src/data/question-groups/sql-queries/content/nested-subqueries.md": __vite_glob_1_435,"/src/data/question-groups/sql-queries/content/not-in-null-issues.md": __vite_glob_1_436,"/src/data/question-groups/sql-queries/content/ntile-function.md": __vite_glob_1_437,"/src/data/question-groups/sql-queries/content/optimize-slow-queries.md": __vite_glob_1_438,"/src/data/question-groups/sql-queries/content/primary-key.md": __vite_glob_1_439,"/src/data/question-groups/sql-queries/content/rank-dense-rank-row-number.md": __vite_glob_1_440,"/src/data/question-groups/sql-queries/content/running-total.md": __vite_glob_1_441,"/src/data/question-groups/sql-queries/content/sargable-query.md": __vite_glob_1_442,"/src/data/question-groups/sql-queries/content/second-highest-salary.md": __vite_glob_1_443,"/src/data/question-groups/sql-queries/content/select-non-grouped-column.md": __vite_glob_1_444,"/src/data/question-groups/sql-queries/content/sql-queries-ending.md": __vite_glob_1_445,"/src/data/question-groups/sql-queries/content/subquery-vs-join.md": __vite_glob_1_446,"/src/data/question-groups/sql-queries/content/union-vs-union-all.md": __vite_glob_1_447,"/src/data/question-groups/sql-queries/content/where-vs-having.md": __vite_glob_1_448,"/src/data/question-groups/sql-queries/content/window-function.md": __vite_glob_1_449,"/src/data/question-groups/sql/content/appointments-no-treatment.md": __vite_glob_1_450,"/src/data/question-groups/sql/content/average-treatment-cost.md": __vite_glob_1_451,"/src/data/question-groups/sql/content/clustered-vs-nonclustered-indexes.md": __vite_glob_1_452,"/src/data/question-groups/sql/content/correlated-subquery.md": __vite_glob_1_453,"/src/data/question-groups/sql/content/database-normalization.md": __vite_glob_1_454,"/src/data/question-groups/sql/content/database-transactions.md": __vite_glob_1_455,"/src/data/question-groups/sql/content/doctor-most-patients.md": __vite_glob_1_456,"/src/data/question-groups/sql/content/find-duplicates.md": __vite_glob_1_457,"/src/data/question-groups/sql/content/foreign-key.md": __vite_glob_1_458,"/src/data/question-groups/sql/content/most-common-diagnosis.md": __vite_glob_1_459,"/src/data/question-groups/sql/content/patients-multiple-appointments.md": __vite_glob_1_460,"/src/data/question-groups/sql/content/patients-no-recent-visits.md": __vite_glob_1_461,"/src/data/question-groups/sql/content/patients-registration-query.md": __vite_glob_1_462,"/src/data/question-groups/sql/content/primary-key.md": __vite_glob_1_463,"/src/data/question-groups/sql/content/query-optimization.md": __vite_glob_1_464,"/src/data/question-groups/sql/content/ranking-functions.md": __vite_glob_1_465,"/src/data/question-groups/sql/content/revenue-last-month.md": __vite_glob_1_466,"/src/data/question-groups/sql/content/sql-constraints.md": __vite_glob_1_467,"/src/data/question-groups/sql/content/sql-dialects.md": __vite_glob_1_468,"/src/data/question-groups/sql/content/sql-ending.md": __vite_glob_1_469,"/src/data/question-groups/sql/content/sql-index.md": __vite_glob_1_470,"/src/data/question-groups/sql/content/sql-injection-prevention.md": __vite_glob_1_471,"/src/data/question-groups/sql/content/sql-joins.md": __vite_glob_1_472,"/src/data/question-groups/sql/content/sql-pagination.md": __vite_glob_1_473,"/src/data/question-groups/sql/content/sql-subsets.md": __vite_glob_1_474,"/src/data/question-groups/sql/content/sql-view.md": __vite_glob_1_475,"/src/data/question-groups/sql/content/sql-vs-other-languages.md": __vite_glob_1_476,"/src/data/question-groups/sql/content/stored-procedures.md": __vite_glob_1_477,"/src/data/question-groups/sql/content/subquery-usage.md": __vite_glob_1_478,"/src/data/question-groups/sql/content/union-vs-union-all.md": __vite_glob_1_479






});
  const allAuthors = await getAllAuthors();
  const allGuides = await getAllGuides();
  return Object.values(questionGroupFilesMap).map((questionGroupFile) => {
    const fileParts = questionGroupFile?.file?.split("/");
    const [questionGroupDir, questionGroupFileName] = fileParts?.slice(-2);
    const questionGroupFileId = questionGroupFileName?.replace(".md", "");
    const formattedAnswers = questionGroupFile.frontmatter.questions.map((qa) => {
      const questionText = qa.question;
      let answerText = qa.answer;
      let isLongAnswer = false;
      if (answerText.endsWith(".md")) {
        const answerFilePath = `/src/data/question-groups/${questionGroupDir}/content/${answerText}`;
        answerText = answerFilesMap[answerFilePath]?.default || answerFilesMap[answerFilePath] || `File missing: ${answerFilePath}`;
        isLongAnswer = true;
      }
      return {
        id: slugify(questionText, { lower: true }),
        question: questionText,
        answer: answerText,
        topics: qa.topics,
        isLongAnswer
      };
    });
    const uniqueTopics = formattedAnswers.flatMap((answer) => answer.topics || []).filter((topic) => topic).reduce((acc, topic) => {
      if (!acc.includes(topic)) {
        acc.push(topic);
      }
      return acc;
    }, []);
    const relatedGuides = questionGroupFile.frontmatter.relatedGuidesId ? allGuides.filter(
      (guide) => guide.id === questionGroupFile.frontmatter.relatedGuidesId
    ).reduce(
      (acc, guide) => {
        acc[guide.frontmatter.title] = `/guides/${guide.id}`;
        return acc;
      },
      {}
    ) : void 0;
    let endingText = "";
    if (questionGroupFile.frontmatter.ending) {
      const endingFilePath = `/src/data/question-groups/${questionGroupDir}/content/${questionGroupFile.frontmatter.ending}`;
      endingText = answerFilesMap[endingFilePath]?.default || answerFilesMap[endingFilePath] || `File missing: ${endingFilePath}`;
    }
    return {
      ...questionGroupFile,
      id: questionGroupFileId,
      ending: endingText,
      questions: formattedAnswers,
      allTopics: uniqueTopics,
      author: allAuthors.find(
        (author) => author.id === questionGroupFile.frontmatter.authorId
      ),
      relatedGuides
    };
  }).sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}
async function getQuestionGroupsByIds(ids) {
  if (!ids?.length) {
    return [];
  }
  const questionGroupFilesMap = /* #__PURE__ */ Object.assign({"/src/data/question-groups/backend/backend.md": __vite_glob_2_0,"/src/data/question-groups/data-analyst/data-analyst.md": __vite_glob_2_1,"/src/data/question-groups/data-science/data-science.md": __vite_glob_2_2,"/src/data/question-groups/devops/devops.md": __vite_glob_2_3,"/src/data/question-groups/frontend/frontend.md": __vite_glob_2_4,"/src/data/question-groups/full-stack/full-stack.md": __vite_glob_2_5,"/src/data/question-groups/golang/golang.md": __vite_glob_2_6,"/src/data/question-groups/javascript/javascript.md": __vite_glob_2_7,"/src/data/question-groups/nodejs/nodejs.md": __vite_glob_2_8,"/src/data/question-groups/react/react.md": __vite_glob_2_9,"/src/data/question-groups/sql-queries/sql-queries.md": __vite_glob_2_10,"/src/data/question-groups/sql/sql.md": __vite_glob_2_11

});
  return Object.values(questionGroupFilesMap).map((group) => {
    const fileId = group?.file?.split("/")?.pop()?.replace(".md", "");
    const frontmatter = group.frontmatter;
    return {
      id: fileId,
      title: frontmatter.briefTitle,
      description: `${frontmatter.questions.length} Questions`
    };
  }).filter((group) => {
    return ids.includes(group.id);
  });
}

export { getQuestionGroupsByIds as a, getAllQuestionGroups as g };
