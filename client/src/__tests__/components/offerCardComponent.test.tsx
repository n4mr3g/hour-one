import { render, screen } from '../../utils/test-utils';
import OfferCard from '../../components/OfferCard/OfferCard';
import { Offer } from '../../dataTypes';
import { describe, it, expect } from 'vitest';

let offer: Offer = {
  author: "Gary Newman",
  message: "I wanted to learn a bit of japanese cooking. I am interested in soups …",
  comment: "Make an offer for other learnings",
  type: "Learn",
  title: "Japanese cooking for basic guitar",
  image: ''
}


describe('OfferCard', async () => {
  it('should render offer card correctly', () => {
    render(<OfferCard offerEl={offer} />);

    expect(screen.getByText(/japanese cooking for basic guitar/i)).toBeInTheDocument();
  })
})