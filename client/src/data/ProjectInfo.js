export const FailedTradeReport = {
    Title: 'Automated Report Generator',
    Name: 'Failed Trade Report',
    Description: 'Report of unmatched Securities/Cash to Premium Clients',
    Points: [
        'Change in regulations in Stock Exchange Singapore led to a very short notice on potentially failed trades giving only 4 hours to fix account funds.',
        'Our Goal being a Custodian was to inform Premium Client of possible failed transaction earliest of possible to fix Securities/Cash account.',
        'Tool was built with Python that Filtered, Wrangled data in Depository file, identified the failed trades, match them with respective SCAs of the Clients, enrich the data frame with additional attributes and send a Customized Report to clients all within 5 minutes.',
    ],
};

export const Communique = {
    Title: 'COMMUNIQUE',
    Name: 'Communique',
    Description:
        ' Web Application for wide Community of Employees within the organization to find relevant skilled colleagues or Projects within the organization to seek guidance in their own BAUs.',
    Points: [
        'WebApp used External APIs from GitHub and Stack Overflow to verify the skill level of the users.',
        'This tech stack of the portal was based on ReactJS, Java/Spring Boot, SQL and Linux based VM.',
    ],
};

export const Neo4j = {
    Title: 'NEO4j',
    Name: 'Trade Repair Analytics',
    Description:
        'Analysis of full lifecycle of the trade. From its point of origin till Settlement or Repair stage',
    Points: [
        `Neo4j is a Graph Database which helped in showcasing the graphical flow of data as Nodes and Relationships.
        It has its own private data query language called CYPHER, a counterpart of SQL in RDBMS`,
    ],
};

export const RtController = {
    Title: 'RT-Controller',
    Name: 'RT-Controller-Test Scenarios on the Fly',
    Description:
        'A Web app to automate the test scenario fro Regression Testing',
    Points: [
        'Online Interface for tester to check various Applications, Business Functions, Features and Test Scenarios',
        'Create or Modify a new Business Function, Feature or Scenario',
        'Execute a scenario using Jenkins APIs',
    ],
};

export const Mt599 = {
    Title: 'MT599 - Text Mining',
    Name: 'MT599 Free Text Analysis',
    Description:
        'Analysis of free texts send by users to perform Analysis and find underlying patterns.',
    Points: [
        'Huge amount to operational effort is spent to evaluate an incoming SWIFT MT599(free text format) message.',
        'Used R-Programming for analysis of free text messages and ELK Stack to prepare Dashboards. Search Guard Plugin for Authentication and User-Role based access to those Dashboards.',
        'Process involved Identification and Classification of various texts messages for MT599’s into various Topics and creation of Dynamic and Interactive Dashboards for Operations team to keep track and reduce incoming MT599’s.',
    ],
};

export const ELKStack = {
    Title: 'Risk Management Dashboards',
    Name: 'Change and Incident performance Dashboard',
    Description:
        'Dynamic and Interactive Dashboards containing all the changes and incidents in the past ',
    Points: [
        'User-Access based authentication and authorization',
        'Contains various interactive Visualizations to find underlying outliers',
        'The data can be filters based on various buckets and on any fields',
    ],
};

export const SharePointPDR = {
    Title: 'SharePoint Project Overview',
    Name: 'Project Document Review',
    Description: 'Automation files check for Auditing Review',
    Points: [
        'Developed a Tool using Python script for PMs to rectify any missing documents in various Projects before Auditing.',
        'The tool parses through all the directories and subdirectories of a Project on SharePoint using Client-side API’s and create a consolidated view of all the documents that are present or missing in the project. Then the report is automatically mailed to individual user for rectification.',
        'This effort helped secure all mandatory documents before final Auditing review.',
    ],
};
