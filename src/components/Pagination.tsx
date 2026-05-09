import { cn } from '@/lib/utils';
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const setPageUrl = (page: number) => `?page=${page}`;

  const isLastPage = currentPage === totalPages;
  const isFirstPage = currentPage === 1;

  return (
    <div className="flex justify-center my-8">
      <nav aria-label="Page navigation">
        <ul className="flex list-style-none">
          <li className="page-item disabled">
            <Link
              className={cn(
                'page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300   focus:shadow-none',
                isFirstPage
                  ? 'text-gray-500 bg-transparent pointer-events-none'
                  : 'text-gray-800 hover:text-gray-800 hover:bg-gray-200'
              )}
              href={setPageUrl(currentPage - 1)}
              tabIndex={-1}
              aria-disabled={isFirstPage}
            >
              Previous
            </Link>
          </li>

          {pages.map((page, index) => {
            const isActive = currentPage === index + 1;
            return (
              <li className={cn('page-item', isActive && 'active')} key={page}>
                <Link
                  className={cn(
                    'page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none',
                    isActive &&
                      'bg-blue-600 text-white hover:text-white hover:bg-blue-600'
                  )}
                  href={setPageUrl(index + 1)}
                >
                  {page}
                </Link>
              </li>
            );
          })}

          <li className={cn('page-item', isLastPage && 'disabled')}>
            <Link
              className={cn(
                'page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 focus:shadow-none',
                isLastPage
                  ? 'text-gray-500 bg-transparent pointer-events-none'
                  : 'text-gray-800 hover:text-gray-800 hover:bg-gray-200'
              )}
              href={setPageUrl(currentPage + 1)}
              aria-disabled={isLastPage}
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
