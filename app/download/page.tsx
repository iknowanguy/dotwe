import { redirect } from 'next/navigation';

export default function DownloadPage() {
  // Redirect to early-access page which handles the download flow
  redirect('/early-access');
}

