package com.credexaudit.backend.repository;

import com.credexaudit.backend.entity.Audit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AuditRepository
        extends JpaRepository<Audit, UUID> {
}