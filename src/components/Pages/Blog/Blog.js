import React from "react";

const Blog = () => {
  return (
    <>
      <h1 className="text-3xl text-center my-5">
        Difference between authorization and authentication
      </h1>
      <div className="flex">
        <div className="overflow-x-auto">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table>
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-lg text-bold font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Authentication
                    </th>
                    <th
                      scope="col"
                      className="text-lg text-bold font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Authorization
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      In authentication process, the identity of users are
                      checked for providing the access to the system.
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      While in authorization process, person's or user's
                      authorities are checked for accessing the resources.
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      In authentication process, users or persons are verified.
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      While in this process, users or persons are validated.
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      It is done before the authorization process.
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      While this process is done after the authentication
                      process.
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      It needs usually user’s login details.
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      While it needs user’s privilege or security levels.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl text-center my-5">
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h1>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <p className="text-xl my-5 mx-2">
            Firebase is made with a developer in mind to solve all the issues
            they might face when making an app. it's developer and user friendly
            initial stage gives free to use. on the other hands there have lot
            of features like bellow that's why i'm using Firebase.
          </p>
          <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
            <li className="p-2 block w-full py-2 border-b border-gray-200 w-full rounded-t-lg">
              Firebase Database: used to store users data like chat messages,
              users details and other metadata
            </li>
            <li className="p-2 block w-full py-2 border-b border-gray-200 w-full">
              Firebase Cloud Storage: used to store user-generated content like
              the profile picture, multimedia messages, etc.
            </li>
            <li className="p-2 block w-full py-2 border-b border-gray-200 w-full">
              Firebase Authentication: it has saved countless hours of my life
              since it allows to authenticates your app with the users.
            </li>

            <li className="p-2 block w-full py-2 w-full rounded-b-lg">
              Firebase Cloud Messaging: used to send notification on so on
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl my-5 mx-2">
            there are lot of option have to implement authentication like bellow
          </p>
          <ul className="bg-white rounded-lg border border-gray-200 text-gray-900">
            <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
              Parse. Parse is a complete open-source application stack and
              backend framework that offers a collection of tools and features
              to help you develop your apps.
            </li>
            <li className="px-6 py-2 border-b border-gray-200 w-full">
              Back4App is an open source, low code, backend alternative to
              Firebase that’s based on the Parse platform.
            </li>
            <li className="px-6 py-2 border-b border-gray-200 w-full">
              AWS is a cloud platform by Amazon that provides a set of tools and
              services, which can be used on their own or together.
            </li>
            <li className="px-6 py-2 border-b border-gray-200 w-full">
              Kuzzle is another open source alternative to Firebase that helps
              you solve several digital needs such as single sign-on,
              collaboration, messaging, secondary screens, and more.
            </li>
            <li className="px-6 py-2 w-full rounded-b-lg">
              Couchbase is an open source, NoSQL document-oriented engagement
              database, and distributed server that's designed to support
              today's mission-critical apps.
            </li>
          </ul>
        </div>
      </div>
      <div className="my-12">
        <h1 className="text-3xl text-center">
          What other services does firebase provide other than authentication?
        </h1>
        <p className="text-xl p-5 text-center">
          there are lot of service available like all in one bellow the top
          features I write
        </p>
        <div className="flex justify-center">
          <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
            <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
              Firebase Database
            </li>
            <li className="px-6 py-2 border-b border-gray-200 w-full">
              Firebase Cloud Storage
            </li>
            <li className="px-6 py-2 border-b border-gray-200 w-full">
              Firebase Machine Learning
            </li>
            <li className="px-6 py-2 border-b border-gray-200 w-full">
              Firebase Cloud Messaging
            </li>
            <li className="px-6 py-2 w-full rounded-b-lg">Extensions</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Blog;
