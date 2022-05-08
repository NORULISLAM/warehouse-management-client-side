import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-info fw-bold p-4 m-4'>Question 1: Difference between javascript and nodejs?</h1>
            <p className='p-2'>
                JavaScript is a programming language.  A programming language for expressing processing according to a set rule.  On the other hand, Node.js refers to the execution environment.  It is for reading and processing sources written in programming languages.  Languages ​​such as JavaScript do not work on their own and always require an execution environment.

                If you want to run PHP or Python, you need to install the execution environment.  On the other hand, when running JavaScript, it will work as long as you have a browser, without having to prepare an execution environment. because the browseras the execution environment for JavaScript.

                However, if you want to run JavaScript on the server side instead of the browser, you have to prepare an execution environment.  The execution environment is Node.js.  Please note that JavaScript and Node.js are completely different things. .....
            </p>
            <h1 className='text-info fw-bold p-4 m-4'>Question 2: When should you use nodejs and when should you use mongodb?</h1>
            <p className='p-2'>
                simply example:
                1.when I want to write a client-side program with new specification JavaScript or TypeScript.

                2.when I want to make a web application.
                3.when I want to make an application for mobile / desktop.


                Besides, Node.js is used to bundle website assets (webpack), Node.js is used to convert Sass to CSS , test tool and code verification. Use Node.js to use the tool (ESLint), use Node.js to set up a simple web server (webpack-dev-server) for development locally, or build a static site Node.js is used for various purposes.
                <p>monogodb</p>
                MongoDB can be used for various purposes
                We also recommend using MongoDB as the main storage for social games that have a lot of light writes and reads.  Since MongoDB is capable of sharding, which is a distributed processing mechanism, it is designed to be horizontally distributed.  Therefore, schemaless and flexible operation is possible. and data shearing.
            </p>

            <h1 className='text-info fw-bold p-4 m-4'>Question 3:Differences between sql and nosql databases?</h1>
            <p className='p-2'>
                When choosing a database, choosing between relational (SQL) and non-relational (NoSQL) data structures is one of the most important decisions.  Both are viable options, but there are important differences that users must keep in mind when making decisions.

                Here we break down the most important differences and describe the best SQL and NoSQL database systems currently available.

                SQL Database: SQL databases use a structured query language (SQL) to define and manipulate data. other one hand, this is very powerful.  SQL is one of the most versatile and widely used options, making it a safe choice and especially suitable for complex queries.  On the other hand, there can be restrictions.  To use SQL, you must use a predefined schema hacker to determine the structure of your data.  In addition, all data must follow the same structure.  This requires a lot of preparation, and like Town A mentioned in the previous example, it is difficult to change the structure and at the same time it can confuse the entire system.

                NoSQL Databases: NoSQL databases, on the other hand, have a dynamic schema for unstructured data, and the data is stored in different ways.  It is configured as column-oriented, document-oriented, graph-based, or a KeyValue store.  This flexibility means that:
            </p>
            <h1 className='text-info fw-bold p-4 m-4'>Question 3:What is the purpose of jwt and how does it work?</h1>
            <p className='p-2'>Do you want to user data fomation secure. so that you use jwt .jwt mainly purpose is data or infomation secure
                this create a randomly token per user .
                .</p>
        </div>
    );
};

export default Blog;