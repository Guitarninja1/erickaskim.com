import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
const postsDirectory = join(process.cwd(), 'content/posts');
import format from 'date-fns/format';

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	const items = {};

	fields.forEach((field) => {
		if (field === 'slug') {
			items[field] = realSlug;
		}
		if (field === 'content') {
			items[field] = content;
		}

		if (typeof data[field] !== 'undefined') {
			items[field] = data[field];
		}
		if (field === 'date') {
			items[field] = format(new Date(data.date), 'MMMM dd, yyyy');
		}
	});

	return items;
}

export function getAllPosts(fields = []) {
	const slugs = getPostSlugs();
	const posts = slugs.map((slug) => getPostBySlug(slug, fields));
	return posts;
}
