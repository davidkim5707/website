# Academic Portfolio Website

This is a Jekyll-based academic portfolio website hosted on GitHub Pages.

## Quick Start

### 1. Customize Your Information

Edit `_config.yml` to update:
- Your name, email, and bio
- Google Scholar profile link
- Site description and metadata

Edit `index.md` to add:
- Your research interests
- Working papers and publications
- Teaching experience
- Link to your CV (upload CV PDF to repository first)

### 2. Local Development (Optional)

To preview your site locally before pushing to GitHub:

```bash
# Install Ruby and Bundler first
# Then install dependencies:
bundle install

# Run local server:
bundle exec jekyll serve

# Visit http://localhost:4000 in your browser
```

### 3. Deploy to GitHub Pages

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Initial website setup"
   ```

2. **Push to GitHub:**
   ```bash
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub: https://github.com/davidkim5707/website
   - Click **Settings** → **Pages**
   - Under "Source", select branch: **main**
   - Click **Save**
   - Your site will be published at: `https://davidkim5707.github.io/website/`

### 4. Adding Content

**Add your CV:**
1. Upload `cv.pdf` to the repository root
2. Update the CV link in `index.md`: `[here](cv.pdf)`

**Add paper PDFs:**
1. Create a `papers/` directory
2. Upload your PDF files
3. Link them in `index.md`: `[[PDF]](papers/your-paper.pdf)`

**Add research code:**
- Keep research projects in separate directories (like `research/svar-svsr/`)
- Link to them from `index.md`

## File Structure

```
website_git/
├── _config.yml           # Site configuration
├── _layouts/
│   └── default.html      # HTML template
├── assets/
│   └── css/
│       └── style.css     # Custom styling
├── index.md              # Main homepage content
├── Gemfile               # Ruby dependencies
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## Customization

### Changing Colors
Edit `assets/css/style.css` to customize colors, fonts, and layout.

### Adding Google Analytics
Update the `tracking_id` in `_config.yml` with your Google Analytics ID.

### Custom Domain (Optional)
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Update `url` in `_config.yml`

## Troubleshooting

**Site not appearing?**
- Wait 5-10 minutes after first push for GitHub Pages to build
- Check Settings → Pages for build status and errors

**Styling looks broken?**
- Verify `baseurl` and `url` in `_config.yml` match your repository name
- Clear browser cache

**Need help?**
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## License

Your content is yours. The Jekyll framework is MIT licensed.
