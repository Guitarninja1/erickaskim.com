import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
const postsDirectory = join(process.cwd(), 'content/posts');
import format from 'date-fns/format';
const projectsDirectory = join(process.cwd(), 'content/projects');

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
		// switch (field) {
		// 	case 'slug':
		// 		items[field] = realSlug;
		// 		break;
		// 	case 'content':
		// 		items[field] = content;
		// 		break;
		// 	case 'date':
		// 		items[field] = format(new Date(data.date), 'MMMM dd, yyyy');
		// 		break;
		// }
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
export function getProjectSlugs() {
	return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug, fields = []) {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(projectsDirectory, `${realSlug}.md`);
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

export function getAllProjects(fields = []) {
	const slugs = getProjectSlugs();
	const projects = slugs.map((slug) => getProjectBySlug(slug, fields));
	return projects;
}
