# Google Maps API Setup Guide

## Step 1: Get Your API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
2. Create a new project or select an existing one
3. Enable **Maps Embed API**
4. Go to **Credentials** and create an API Key

## Step 2: Add API Key to Project

1. Open the `.env.local` file in your project root
2. Replace `your_api_key_here` with your actual API key:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

3. **Important**: Restart your development server after adding the key
   ```bash
   npm run dev
   ```

## Step 3: Secure Your API Key

### Application Restrictions

1. Go to **Google Cloud Console → Credentials**
2. Click on your API key
3. Under **Application restrictions**, select **"Websites"**
4. Add these referrers:

**For Development:**
```
localhost:3000/*
localhost:*
```

**For Production (add when you deploy):**
```
yourdomain.com/*
*.yourdomain.com/*
```

### API Restrictions

1. Under **API restrictions**, select **"Restrict key"**
2. Choose only **"Maps Embed API"**
3. Click **Save**

## Step 4: Set Up Cost Controls

### Budget Alerts (Recommended)

1. Go to **Google Cloud Console → Billing → Budgets & alerts**
2. Click **Create Budget**
3. Set amount: `$10/month` (or your preferred limit)
4. Set alert thresholds: 50%, 90%, 100%
5. Add your email for notifications

### Daily Quotas (Best Protection)

1. Go to **APIs & Services → Maps Embed API**
2. Click **Quotas**
3. Set daily request limit: `1,000 requests/day` (adjust as needed)
4. This prevents unexpected charges

## Pricing Information

- **Free Tier**: $200 credit per month (~28,000 map loads)
- **After Free Tier**: $7 per 1,000 map loads
- **For typical clinic website**: You'll likely stay within free tier

## Updating the Address

To change the map location, edit `app/contact/page.tsx`:

```tsx
<GoogleMap 
    address="Your Real Address, City, Province, Postal Code"
    className="h-full"
/>
```

## Troubleshooting

### Map not showing?
- Check if API key is correctly added to `.env.local`
- Restart dev server after adding environment variables
- Check browser console for errors
- Verify Maps Embed API is enabled in Google Cloud Console

### "This page can't load Google Maps correctly" error?
- Check if billing is enabled on your Google Cloud account
- Verify API key restrictions allow your domain
- Make sure Maps Embed API is enabled

### Want to disable billing temporarily?
- Go to **Billing → Account Management**
- Disable billing (note: this will stop the API from working)

## Security Best Practices

✅ Never commit `.env.local` to version control (already in `.gitignore`)
✅ Always restrict API key to specific domains
✅ Only enable APIs you actually use
✅ Set up budget alerts
✅ Monitor usage regularly in Google Cloud Console

## Support

- [Google Maps Platform Documentation](https://developers.google.com/maps/documentation)
- [Pricing Calculator](https://mapsplatform.google.com/pricing/)
- [Google Cloud Support](https://cloud.google.com/support)
