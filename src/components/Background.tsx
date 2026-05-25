const COLS = [
  {
    speed: 42,
    lines: [
      'git init', 'git add .', 'git commit -m "feat: init"',
      'git push origin main', 'git log --oneline',
      'a3f8d12 feat: add auth', 'b7c9e21 fix: null pointer',
      'git pull origin develop', 'git merge --no-ff feature/auth',
      'git stash pop', 'git tag v1.2.0', 'git rebase main',
      'git cherry-pick a3f8d12', 'git fetch --all --prune',
      'git branch -d hotfix/login', 'Merge branch "feature/api"',
      'git log --graph --oneline --all',
    ],
  },
  {
    speed: 58,
    lines: [
      '@RestController', '@RequestMapping("/api/v1")',
      'public class UserController {',
      '  @GetMapping("/{id}")',
      '  public ResponseEntity<User> getUser(',
      '    @PathVariable Long id) {',
      '    return service.findById(id);', '  }',
      '@Service', '@Autowired',
      'private UserRepository repo;',
      '@Override', 'public List<User> findAll() {',
      '  return repo.findAll();', '}',
      '@Column(nullable = false)', 'private String username;',
      'Optional<User> u = repo.findById(id);',
      'u.orElseThrow(NotFoundException::new);',
    ],
  },
  {
    speed: 36,
    lines: [
      'SELECT u.id, u.name, u.email,',
      '  u.created_at',
      'FROM users u',
      'LEFT JOIN orders o',
      '  ON u.id = o.user_id',
      'WHERE u.active = 1',
      'ORDER BY u.created_at DESC',
      'LIMIT 50;',
      'INSERT INTO users (name, email)',
      "  VALUES ('Tom', 'tom@dev.io');",
      'UPDATE users SET active = 0',
      '  WHERE last_login < NOW() - INTERVAL 90 DAY;',
      'CREATE INDEX idx_email ON users(email);',
      'ALTER TABLE orders ADD COLUMN status VARCHAR(20);',
      'BEGIN; UPDATE ...; COMMIT;',
      'EXPLAIN SELECT * FROM users WHERE id = 42;',
      'CREATE TABLE sessions (id UUID PRIMARY KEY);',
    ],
  },
  {
    speed: 52,
    lines: [
      "import { useState, useEffect } from 'react'",
      "import { motion } from 'framer-motion'",
      'interface User { id: number; name: string }',
      'type ApiRes<T> = { data: T; ok: boolean }',
      'const [users, setUsers] = useState<User[]>([])',
      'useEffect(() => {',
      '  fetchUsers().then(setUsers)',
      '}, [])',
      'const App: React.FC<Props> = ({ id }) => {',
      '  return <motion.div animate={{ opacity: 1 }}>',
      '}',
      'const res = await fetch("/api/users")',
      'const json: ApiRes<User[]> = await res.json()',
      '<ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>',
      'useCallback(() => handleClick(id), [id])',
      'useMemo(() => users.filter(u => u.active), [users])',
      'const ctx = useContext(AuthContext)',
    ],
  },
  {
    speed: 65,
    lines: [
      'vite v5.3.0 ready in 183ms',
      '➜  Local:   http://localhost:5173/',
      '✓ 42 modules transformed',
      'dist/assets/index-BsVj.js  142.3 kB',
      'npm run build', 'npm run deploy',
      'Published to gh-pages ✓',
      'composer install',
      'symfony server:start --daemon',
      'php bin/console cache:clear',
      'doctrine:migrations:migrate',
      'php bin/console make:entity User',
      '> GET  /api/users       200 OK  12ms',
      '> POST /api/users       201 Created  28ms',
      '> GET  /api/user/42     200 OK  8ms',
      '> DELETE /api/user/5    204 No Content',
      '> GET  /api/unknown     404 Not Found',
    ],
  },
  {
    speed: 46,
    lines: [
      '<?php',
      'namespace App\\Controller;',
      '#[Route("/api/users", methods: ["GET"])]',
      'public function list(): JsonResponse {',
      '  return $this->json($this->repo->findAll());',
      '}',
      '#[Route("/api/users/{id}")]',
      '$this->em->remove($this->repo->find($id));',
      '$this->em->flush();',
      '$repo->findOneBy(["email" => $email])',
      '@Entity', '@Table(name = "users")',
      '@OneToMany(mappedBy = "user")',
      '@ManyToOne @JoinColumn(name = "role_id")',
      'private Role role;',
      'SpringApplication.run(App.class, args);',
      'export type { User, ApiRes }',
    ],
  },
]

export default function Background() {
  return (
    <div className="bg-terminal" aria-hidden>
      {COLS.map((col, i) => (
        <div
          key={i}
          className="bg-terminal__col"
          style={{ animationDuration: `${col.speed}s` }}
        >
          {[...col.lines, ...col.lines, ...col.lines, ...col.lines, ...col.lines, ...col.lines].map((line, j) => (
            <p key={j} className="bg-terminal__line">{line}</p>
          ))}
        </div>
      ))}
    </div>
  )
}
