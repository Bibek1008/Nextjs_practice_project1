export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-50 via-white to-indigo-50 p-6">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-10">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Account Settings</h1>

        {/* Profile Information */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Profile Information</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Name</label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
                defaultValue="John Doe"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Email</label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
                defaultValue="john.doe@gmail.com"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Security</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Password</label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
                placeholder="Enter new password"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Confirm Password</label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
                placeholder="Confirm new password"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button className="px-4 py-2 rounded-md border bg-gray-100 text-gray-700">
            Cancel
          </button>

          <button className="px-5 py-2 rounded-md bg-blue-600 text-white">
            Save Changes
          </button>
        </div>

      </div>
    </main>
  );
}
