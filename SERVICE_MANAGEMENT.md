# Service Management Guide

## How to Add or Edit Services

All service data is managed in a single file: `lib/servicesData.ts`

### Adding a New Service

1. Open `lib/servicesData.ts`
2. Add a new service object to the `servicesData` array following this structure:

```typescript
{
  id: 'your-service-id',  // URL-friendly identifier (e.g., 'massage-therapy')
  title: 'Service Title',  // Display name
  subtitle: 'Category',    // e.g., 'Rehabilitation', 'Wellness'
  description: 'Short tagline',  // Brief description for cards
  image: 'https://...',    // Card image URL (800x600)
  heroImage: 'https://...', // Hero banner image (1920x1080)
  fullDescription: 'Detailed description...',  // Full service description
  benefits: [
    'Benefit 1',
    'Benefit 2',
    // Add more benefits
  ],
  conditions: [
    'Condition 1',
    'Condition 2',
    // Add more conditions treated
  ],
  whatToExpect: [
    {
      title: 'Step Title',
      description: 'Step description'
    },
    // Add more steps
  ],
  duration: '45-60 minutes',  // Optional
  frequency: '1-2 times per week'  // Optional
}
```

### Example: Adding a New Service

```typescript
{
  id: 'sports-therapy',
  title: 'Sports Therapy',
  subtitle: 'Performance',
  description: 'Optimize Athletic Performance',
  image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop&q=80',
  heroImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&h=1080&fit=crop&q=80',
  fullDescription: 'Our sports therapy program helps athletes prevent injuries, recover faster, and perform at their peak.',
  benefits: [
    'Injury prevention',
    'Performance optimization',
    'Faster recovery',
    'Sport-specific training'
  ],
  conditions: [
    'Sports injuries',
    'Overuse injuries',
    'Performance plateaus'
  ],
  whatToExpect: [
    {
      title: 'Assessment',
      description: 'Comprehensive evaluation of your athletic performance and injury risk.'
    },
    {
      title: 'Training Plan',
      description: 'Customized program to enhance performance and prevent injuries.'
    }
  ],
  duration: '60 minutes',
  frequency: '2-3 times per week'
}
```

### Editing an Existing Service

1. Open `lib/servicesData.ts`
2. Find the service by its `id`
3. Update any fields as needed
4. Save the file

### Service URLs

Services are automatically accessible at: `/services/[service-id]`

For example:
- `/services/physiotherapy`
- `/services/massage-therapy`
- `/services/shockwave-therapy`

### Image Recommendations

- **Card Image**: 800x600px (4:3 ratio)
- **Hero Image**: 1920x1080px (16:9 ratio)
- Use high-quality images from Unsplash or your own professional photos

### Tips

- Keep `id` lowercase with hyphens (URL-friendly)
- Write clear, concise descriptions
- List 4-6 benefits for best layout
- Include 4-6 conditions treated
- Add 3-4 "What to Expect" steps
- Use professional, welcoming language

### Testing

After adding a service:
1. Check the services page: `/services`
2. Click on your new service card
3. Verify all content displays correctly
4. Test on mobile and desktop views
