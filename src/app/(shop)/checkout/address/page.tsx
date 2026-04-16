import { PageHeading } from '@/components/Title';
import Link from 'next/link';

const AddresstPage = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col  gap-8">
      <PageHeading title="Address" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col mb-2">
          <span>First Name</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" />
        </div>

        <div className="flex flex-col mb-2">
          <span>Last Name</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" />
        </div>

        <div className="flex flex-col mb-2">
          <span>Address</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" />
        </div>

        <div className="flex flex-col mb-2">
          <span>Address 2 (optional)</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" />
        </div>

        <div className="flex flex-col mb-2">
          <span>Zip Code</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" />
        </div>

        <div className="flex flex-col mb-2">
          <span>City</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" />
        </div>

        <div className="flex flex-col mb-2">
          <span>Country</span>
          <select className="p-2 border rounded-md bg-gray-200">
            <option value="">[ Select ]</option>
            <option value="CRI">Costa Rica</option>
          </select>
        </div>

        <div className="flex flex-col mb-2">
          <span>Phone</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200" />
        </div>

        <div className="flex flex-col mb-2 sm:mt-10">
          <Link
            href="/checkout"
            className="btn-primary flex w-full sm:w-1/2 justify-center "
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddresstPage;
